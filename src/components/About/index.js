import React from "react";
import JMPortrait from "../../assets/Images/Joshua Maurizio Portrait.jpg"

export default function About() {
    return (
        <div class="col-10 offset-1 d-flex flex-row justify-content-center align-items-center">
            <img class="m-3" id="JMPortrait" src={JMPortrait} alt="Joshua Maurizio"></img>
            <p class="h3 text-center" id="about-me-p">
                Hello! I'm Joshua Maurizio, a web developer in Nashville, Tennessee. I live with my beautiful wife Brittany and our rescue dog Antonio in our home we've been fixing up on the outskirts of Nashville. Web development has always been an interest of mine, and now I'm pursuing it as a full-time career. I've been drawn to web development because I enjoy problem solving, and constantly learning new languages and ideas as new technology unfolds. When I'm not at the computer, I enjoy hiking, fishing, and trying out new bbq recipes with friends.
            </p>
        </div>  
    )
}
