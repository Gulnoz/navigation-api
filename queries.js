var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/navigation';
var db = pgp(connectionString);

// add query functions

module.exports = {
    getSingleNavigation: getSingleNavigation,
    getLink: getLink,
    createLink: createLink,
    updateLink: updateLink,
    removeLink: removeLink
};