import React from "react";
//import ReactDom from "react-dom";
//import "./public/style.css";

let date=new Date();
let curYear=date.getFullYear();

function Footer(){
    return <footer>
    <p>Copyright &copy; {curYear} </p></footer>;
}

export default Footer;