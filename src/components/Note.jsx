import React from "react";
//import ReactDom from "react-dom";
///import "./public/style.css";


function Note(props){
    return <note>
    <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div></note>;
}

export default Note;