import React, { useState, useEffect } from 'react';
import LinkList from './LinkList'
import styled from 'styled-components'
import { Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
position: 'relative';
`;
const StyledLinkList = styled.div`
position: 'relative';
`;

function Navigation(props) {
    return (
        <Container>
        <div id='navigation'>
        <div id='zonee' >
        <div className='Rectangle'>
        <div className='bg'><div className='bg-text'>Navigation</div> 
        <div className='bg-text-add'
        onClick={()=>props.createLinkHendler()}>+item</div> 
        </div>
        {props.navigation ?
           //Using Droppable component from react-beautiful-dnd 
           //to be able to drop draged component in LinkList component
            <Droppable droppableId={`props.navigationId`}>
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