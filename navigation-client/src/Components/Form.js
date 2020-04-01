import React, { useState, useEffect } from 'react';
import back from './svg/arrow-left.svg';
function Form(props) {
    const [linkState, setLinkState] = useState({title: props.link.title, url: props.link.url});
    
let onChangeHendler=(e)=>{
setLinkState({
    ...linkState,
    [e.target.name]: e.target.value
})
}
    return (
        <>
            <form>
                <div className='form-group-row'>
                <button className='btn-back' 
                onClick={(e)=>{props.closeForm(e)}}><img src={back}></img></button>
                <div className='form-group-col'>
                    <div>
                        <label>Link Title</label>
                        <input type="text" name="title" value={linkState.title} 
                            onChange={onChangeHendler} 
                            onBlur={(e) => {props.updateLinkHendler(e,props.link.id)}}>
                        </input>
                    </div>
                    <div>
                        <label>Link URL</label>
                        <input type="text" name="url" value={linkState.url}
                            onChange={onChangeHendler} 
                            onBlur={(e) => { props.updateLinkHendler(e,props.link.id)}}>
                        </input>
                    </div>
                </div>
                </div>
            </form>
        </>
    );
}

export default Form;