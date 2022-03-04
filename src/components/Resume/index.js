import React from "react";
import JMResume from "../../assets/Images/Joshua Maurizio Resume1024_1.jpg"
import { Image } from "react-bootstrap";

export default function Resume() {
    return (
        <div class="col-8 offset-1 d-flex flex-column justify-content-center align-items-center">
            <Image className="fluid" src={JMResume} alt="Joshua Maurizio Resume"></Image>
        </div>    
    )
}