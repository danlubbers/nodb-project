// Functional Compoenent for Packed List

import React from 'react';

export default function Packed(props) {
    let displayList = props.list.map((element, index)=>{
        return (
            <li key={index}>{element.text}</li>
        )
    })
    return(
        <div className="packedList">
        {displayList}
        </div>
    )
}
