import React from 'react';

const char = (props) => {

    const style = {
        display: 'inline-block',
        border : '1px solid #ccc',
        textAlign: 'center',
        margin: '0 5px'
    }
    const styleCross = {
        display: 'inline-block',
        borderleft:' 1px solid #ccc',
        padding: '10px',
        cursor: 'pointer'
    }
    const p= {margin:'0 0 0 10px'}
    return(
        <div style={style}>
            <p style={p}>{props.character} <span style={styleCross} onClick={props.clicked}>X</span> </p>
        </div>
    )
}

export default char;