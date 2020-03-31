import React, { useState, useEffect } from 'react';
import Link from './Link'
import './Navigation.css'
import { Droppable, Draggable } from 'react-beautiful-dnd';
function LinkList(props) {

    let updateLinkHendler = (e, id) => {
        console.log(e.target)
        let value = e.target.value;
        let name = e.target.name;

        fetch(`http://localhost:3000/api/links/${id}`,
            {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    [name]: value,

                })
            })
            .then(res => res.json())
            .then((res) => {
                props.updatedLinkHendler(res.data)
            })
    }
    let linkHendler = () => {

        return props.navigation.map((link, index) => {
            return (
                
                    <Link
                        key={link.id} 
                        index={index}
                        link={link}
                        updateLinkHendler={updateLinkHendler}
                        deleteLinkHendler={props.deleteLinkHendler}
                        editLinkHendler={props.editLinkHendler} />

            )
        }
        )
    }

    return (
       <div>
            {linkHendler()}
        </div>
    );
}

export default LinkList;