import React from "react";
import logo from '../../resources/images/troll-face.png'

export default function Header(){
    return (
        <header className="header">
            <img className="header-logo" src={logo}></img>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">by-yixi</h4>
        </header>
    )
}