import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Container from './Container'
import styled from 'styled-components'
import {Draggable } from 'react-beautiful-dnd';

const StyledContainer = styled.div`

background-color: wight;
`;

function Link(props) {
    useEffect(()=>{
        // if () console.log(result);
    })
    return (
        <Draggable draggableId={`${props.link.id}`} index={props.index}>
        {(provided)=>(
        <StyledContainer

        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
        <Container
            link={props.link}
            deleteLinkHendler={props.deleteLinkHendler}
            updateLinkHendler = {props.updateLinkHendler}/>
        </StyledContainer>
        )}
        </Draggable>
    );
}

export default Link;