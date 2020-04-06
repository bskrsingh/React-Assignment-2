import React from 'react';

import './Validation.css'
const validation = (props) =>{

    let validationMessage = "Text in long enough"
    if(props.inputLength <=5){
        validationMessage = "Text is too sort"
    }

    return (

        //1st way

        // <div className="validation">
        //     {
        //         props.inputLength > 5 ?
        //     <p>Text too Long</p> :
        //     <p>Text Too short</p>
        //     }
        // </div>

        //2nd way

        <div className="validation">
            <p>{validationMessage}</p>
        </div>

    )
}

export default validation