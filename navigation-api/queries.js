var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/navigation_db';
var db = pgp(connectionString);

function getLinks(req, res, next) {
    db.any('select * from links')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL links'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}
function getNavigationLinks(req, res, next) {
    db.any(`select * from links where navigation_id = ${req.params.id} order by current_position asc`)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Navigation links'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}
function getNavigation(req, res, next) {
    db.one('select * from navigation')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved navigation'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}
function getLink(req, res, next) {
    var linkID = parseInt(req.params.id);
    db.one('select * from links where id = $1', linkID)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE link'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}
function createLink(req, res, next) {
    let countRows;
    db.any('select count(*) from links where navigation_id=1')
        .then(function (data) {
            countRows = parseInt(data[0]['count'])
            if(countRows<5){
                db.any(`INSERT INTO links(title, url, navigation_id) VALUES('${req.body.title}', '${req.body.url}', ${req.body.navigation_id}) RETURNING *;`
                , req.body
                )
                    .then(function (data) {
                        res.status(200)
                            .json({
                                status: 'success',
                                data: data[0],
                                message: 'Inserted one link'
                            });
                    })
                    .catch(function (err) {
                        return next(err);
                    });
            }
            else{
                    res.json({
                        status: 'error',
                        data: data[0],
                        message: 'Links limit reached!'
                    })     
                }
        })
}
function updateLink(req, res, next) {
    let key = Object.keys(req.body)[0];
    let val = req.body[Object.keys(req.body)[0]]
    db.one(`update links set ${key}='${val}' where id=$1 RETURNING *`,
        [parseInt(req.params.id)])
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Updated link'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}
function removeLink(req, res, next) {
    var linkID = parseInt(req.params.id);
    db.result('delete from links where id = $1', linkID)
        .then(function (result) {
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} link`
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updateLinks(req, res, next){
    let val = JSON.parse(req.body.navigation);
    console.log(val)
    try{
        val.map((v)=>{
            db.result(`UPDATE links set current_position = ${v.current_position} WHERE id=${v.id} ;`);
        })
    console.log('success')
    }
    catch(ex){
    console.log(ex)
    }
}

function createNavigation(req, res, next){
    let countRows;
    db.any('select count(*) from navigation')
        .then(function (data) {
            countRows = parseInt(data[0]['count'])
    db.one(`INSERT INTO navigation(name) VALUES('nav-${countRows}') RETURNING *;`)
        .then(function (nav) {
            res.status(200)
                .json({
                    status: 'success',
                    data: nav,
                    message: 'Inserted one navigation'
                });
        })
        .catch(function (err) {
            return next(err);
        });
})
}

module.exports = {
    getNavigation: getNavigation,
    getLinks: getLinks,
    getLink: getLink,
    getNavigationLinks: getNavigationLinks,
    createLink: createLink,
    updateLinks: updateLinks,
    updateLink: updateLink,
    removeLink: removeLink,
    createNavigation: createNavigation,
};

