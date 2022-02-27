import React from "react";

function Nav() {
    return (
        <nav class="h4 d-flex flex-column mt-2 justify-content-evenly align-items-center sticky-top" id="main-nav">
            <a href="index.html" class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                <i class="bi bi-house-door" id="nav-icon"></i>
                <div id="nav-text">Home</div>
            </a>   
            <a href="about-me.html" class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                <i class="bi bi-file-person" id="nav-icon"></i>
                <div id="nav-text">About Me</div>
            </a>
            <a href="resume.html" class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                <i class="bi bi-journal-text" id="nav-icon"></i>
                <div id="nav-text">Resume</div>
            </a>
            <a href="projects.html" class="text-decoration-none text-white m-2 d-flex flex-column align-items-center" id="nav-icon">
                <i class="bi bi-file-code" id="nav-icon"></i>
                <div id="nav-text">Projects</div>
            </a>
        </nav>
    )
}

export default Nav;