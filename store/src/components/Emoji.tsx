import React from "react";

function  Emoji(props: any){

    return (
        <>
        <h1
            className="emoji"
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ?  "false" : "true"}
            >
                {props.symbol}
                
            </h1>
            <span>
            {props.text}
            </span>
        </>

)}

export default Emoji;