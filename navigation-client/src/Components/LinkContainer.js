import React, { useState} from 'react';
import Form from './Form'
import option from './svg/options.svg';
import edit from './svg/edit.svg';
import trash from './svg/trash.svg';
//LINK CONTAINER
function LinkContainer(props) {
    const [editLink, setEditLink] = useState(false);
    const [groupEditDelete, setgroupEditDelete] = useState(false);

//Callback function to show edit, delete section when edit button was clicked
    let groupEditDeleteHendler = () => {
        setgroupEditDelete(!groupEditDelete)
        setEditLink(false)
    }
//Callback function to close edit form when button was clicked
    let closeForm = (e) => {
        e.preventDefault();
        console.log('closeForm')
        setEditLink(false)
    }
//Callback function show edit link form when edit button was clicked
    let editLinkHendler = () => {
        setEditLink(!editLink)
        setgroupEditDelete(false)
    }
//DELETE link request to the server to delete link from navigation
    let deleteLinkHendler = (id) => {
        console.log(id)
        fetch(`https://navigation-apii.herokuapp.com/api/links/${id}`,
            { method: 'delete'})
            .then(() => {
 //Callback function to update state in App.js               
                props.deleteLinkHendler(id)
            })
    }

    return (
            <>
                    {/* <div className='card-package card-bg'> */}
                    {editLink ? <Form closeForm={closeForm} updateLinkHendler={props.updateLinkHendler} link={props.link} />: null}
                    {!editLink ? <><div className='name'> {props.link.title} </div>
                    
                    <button type='button'className='btn-edit' 
                    onBlur={() => {setgroupEditDelete(false)}} onClick={groupEditDeleteHendler}><img src={option}></img>
                        </button> 
                       </> 
                        : null}
                    {/* </div> */}
                    {groupEditDelete ? <div id='group-edit-del'>
                <a className='group-edit-del-btn' onClick={editLinkHendler}><img src={edit}></img> edit</a>
                    {/* <div className='btw-link-section'></div> */}
                <a className='group-edit-del-btn' onClick={() => { deleteLinkHendler(props.link.id) }}>
                    <img src={trash}></img> delete</a> </div> : null}
            </>
);}

export default LinkContainer;