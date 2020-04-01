import React, {useState, useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import '@atlaskit/css-reset';
import Navigation from './Components/Navigation'
import { DragDropContext}  from 'react-beautiful-dnd';

function App() {
  
  const [navigation, setNavigation] = useState(null);
  const [navigationId, setNavigationId] = useState(1);
  useEffect(() => {
    //CREATE Navigation request
    // fetch('http://localhost:3000/api/navigation',
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //  
    //   })
    //   .then(res => res.json())
    //   .then(nav=>setNavigationId(nav.id));
  
    // GET Links using navigation id request from the server
    fetch(`http://localhost:3000/api/navigation/${navigationId}`)
      .then(res => res.json())
      .then(res => {
            setNavigation(res.data)})
  },[]);
  
  // CREATE new link request to the server
  let createLinkHendler=()=>{
    fetch('http://localhost:3000/api/links',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: '',
        url: '',
        current_position: navigation.length,
        navigation_id: navigationId
      })
    })
    .then(res => res.json())
    .then((data)=>{
      if(data.status!=='error'){
        setNavigation([...navigation, data.data])
      }
    })
  }
  
//DELETE link from the state
const deleteLinkHendler=(id)=>{
let links = navigation.filter(nav => nav.id != id); 
setNavigation(links)
}
//UPDATE update state with updated link
const updatedLinkHendler = (link) => {
let newLinks = navigation.filter(nav => nav.id != link.id);
  let newNav = navigation.slice();
  console.log(link)
  newNav.splice(link.current_position, 1);
  newNav.splice(link.current_position, 0, link)
  setNavigation(newNav)
  }

  //When link was draged and droped update state
  //to show navigation with new links order
  let onDragEnd=(result)=>{
    // if (!result.destination) {
    //   return;
    // }
    let sourceIdx = parseInt(result.source.index)
    let destIdx = parseInt(result.destination.index)
    let draggedLink = navigation[sourceIdx]
    let newNav = navigation.slice();
    newNav.splice(sourceIdx,1);
    newNav.splice(destIdx, 0, draggedLink)
    newNav.forEach((el,idx)=>{
            el.current_position=idx
    })
    setNavigation(newNav);

  //UPDATE navigation links current_position request to the server
    fetch(`http://localhost:3000/api/navigation/${navigationId}`,
      {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          navigation: JSON.stringify(navigation)
        })
      })
  }
 //Using DragDropContext to be able to drag and drop components in Navigation component 
  return (
    <DragDropContext
    onDragEnd={onDragEnd}
    >
      <Navigation
        navigationId={navigationId}
        navigation={navigation}
        createLinkHendler={createLinkHendler}
        deleteLinkHendler={deleteLinkHendler}
        updatedLinkHendler={updatedLinkHendler}
      />
    </DragDropContext>
    ) 
}

export default App;
