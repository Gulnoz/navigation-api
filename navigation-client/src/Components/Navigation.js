import React, { useState, useEffect } from 'react';
import LinkList from './LinkList'
import styled from 'styled-components'
// import './Navigation.css'
import { Droppable, Draggable } from 'react-beautiful-dnd';
const Container = styled.div`
position: 'relative';
`;
const StyledLinkList = styled.div`
position: 'relative';
margin:20px;
`;

function Navigation(props) {
    return (
        <Container>
        <div id='navigation'>
        <div id='zonee' >
        <div class='Rectangle'>
        <div class='bg'><div class='bg-text'>Navigation</div> 
        <div class='bg-text-add'
        onClick={()=>props.createLinkHendler()}>+item</div> 
        </div>
        {props.navigation ?
        <Droppable droppableId={'1'}>
            {provided =>(
            <StyledLinkList 
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
            <LinkList 
            navigation={props.navigation}
            deleteLinkHendler={props.deleteLinkHendler}
            updatedLinkHendler={props.updatedLinkHendler}
            />
            {provided.placeholder}
            </StyledLinkList>
            )}
            </Droppable>
            : null} 
            </div>
        </div>
        </div>
        </Container>
    );
}

export default Navigation;