import React from "react";
import JMResume from "../../assets/Images/Joshua Maurizio Resume.pdf"

export default function Resume() {
    return (
        <div class="col-8 offset-1 d-flex flex-column justify-content-center align-items-center">
            <iframe title="JMResume" src={JMResume} width="100%" height="550" alt="Joshua Maurizio Resume"></iframe>
        </div>    
    )
}