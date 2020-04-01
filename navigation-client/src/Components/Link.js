import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LinkContainer from './LinkContainer'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd';

const StyledContainer = styled.div`
margin: 8px 6px;
display: flex;
justify-content: space-between;
cursor: pointer;
border: 1px solid rgba(0, 0, 0, 0.3);
box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.13);
border-radius: 1px;
background-color: ${props => (props.isDragging ? '#DEDEDE': 'white')};
`;
//RENDER LINK CONTAINER
//Using Draggable component to be able drag the link
function Link(props) {
    return (
        <Draggable draggableId={`${props.link.id}`} index={props.index}>
        {(provided, snapshot)=>(
        <StyledContainer
        id='styled-cont'
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        {...provided.draggableProps}
        {...provided.dragHandleProps}>
        <LinkContainer
            link={props.link}
            deleteLinkHendler={props.deleteLinkHendler}
            updateLinkHendler = {props.updateLinkHendler}/>
        </StyledContainer>
        )}
        </Draggable>
    );
}
export default Link;