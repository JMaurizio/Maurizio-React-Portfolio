import React from "react";
import About from "../About";
import Home from "../Home";
import Projects from "../Project";
import Resume from "../Resume";
import Contact from "../Contact";

export default function Nav({page, setPage}) {
    
    return (
        <div class='col-1'>
            <nav class="h4 d-flex flex-column mt-2 justify-content-evenly align-items-center sticky-top" id="main-nav">
                <button onClick={() => setPage(<Home/>)}  
                    class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                    <i class="bi bi-house-door" id="nav-icon"></i>
                    <div id="nav-text">Home</div>
                </button>   
                <button onClick={() => setPage(<About/>)} 
                    class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                    <i class="bi bi-file-person" id="nav-icon"></i>
                    <div id="nav-text">About Me</div>
                </button>
                <button onClick={() => setPage(<Resume/>)} 
                    class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                    <i class="bi bi-journal-text" id="nav-icon"></i>
                    <div id="nav-text">Resume</div>
                </button>
                <button onClick={() => setPage(<Projects/>)} 
                    class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                    <i class="bi bi-file-code" id="nav-icon"></i>
                    <div id="nav-text">Projects</div>
                </button>
                <button onClick={() => setPage(<Contact/>)} 
                    class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                    <i class="bi bi-phone-vibrate" id="nav-icon"></i>
                    <div id="nav-text">Contact</div>
                </button>
            </nav>
        </div>    
    )
}