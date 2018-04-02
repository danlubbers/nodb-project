// Functional Compoenent for Packed List

import React from 'react';

export default function Packed(props) {
    let displayList = props.list.map((element, index)=>{
        return (
            <h2 key={index}>{element.text}</h2>
        )
    })
    return(
        <div className="packedList">
        {displayList}
        </div>
    )
}
