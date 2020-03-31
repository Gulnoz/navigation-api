import React, { useState, useEffect } from 'react';
import Form from './Form'
function Container(props) {
    const [editLink, setEditLink] = useState(false);

    const [deleteLink, setDeleteLink] = useState(false);
    const [groupEditDelete, setgroupEditDelete] = useState(false);
    let groupEditDeleteHendler = () => {
        setgroupEditDelete(!groupEditDelete)
        setEditLink(false)
    }
    let closeForm = (e) => {
        e.preventDefault();
        console.log('closeForm')
        setEditLink(false)
    }
    let editLinkHendler = () => {
        setEditLink(!editLink)
        setgroupEditDelete(false)
    }

    let deleteLinkHendler = (id) => {
        console.log(id)
        fetch(`http://localhost:3000/api/links/${id}`,
            {
                method: 'delete'
            })
            .then(() => {
                props.deleteLinkHendler(id)
            })

    }

    return (
            <div class='group7'>
                    <div class='card-package card-bg'>
                    {editLink ? <Form closeForm={closeForm} updateLinkHendler={props.updateLinkHendler} link={props.link} />: null}
                    {!editLink ? <><div class='name'> {props.link.title} </div>
                        <div id='edit-btn-div'>
                        <button class='btn-edit btn-edit-bg' 
                                onClick={groupEditDeleteHendler}>...
                        </button> 
                        </div></> 
                        : null}
                    </div>
                    {groupEditDelete ? <div id='group-edit-del'>
                    <a class='group-edit-del-btn' onClick={editLinkHendler}>edit</a>
                    <div class='btw-link-section'></div>
                    <a class='group-edit-del-btn' onClick={() => { deleteLinkHendler(props.link.id) }}>delete</a> </div> : null}
            </div>
);}

export default Container;