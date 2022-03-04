import React from "react";
import { Card } from "react-bootstrap";
import programmerDashboard from "../../assets/Images/programmer-dashboard.png"
import chattleshipScreenshot from "../../assets/Images/chattleship-board-crop.png"
import comingSoonImage from "../../assets/Images/smoky moutain placeholder.jpg"

export default function Projects() {

    return (
        <div class="col-10 offset-1 d-flex flex-row flex-wrap justify-content-center align-items-center">
            <Card onClick={() => {window.open('https://joelkovalcson.github.io/Programmer-Dashboard/','_blank');}} className="bg-dark text-white m-2" id="project-card">
                <Card.Img src={programmerDashboard} id="project-image" alt="Programer Dashboard Screenshot" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <Card.Title id="project-title">Programmer Dashboard</Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Card onClick={() => {window.open('https://chattleship.herokuapp.com/','_blank');}} className="bg-dark text-white m-2" id="project-card">
                <Card.Img src={chattleshipScreenshot} id="project-image" alt="Chattleship Screenshot" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <Card.Title id="project-title">Chattleship</Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Card onClick={() => {window.open('https://chattleship.herokuapp.com/','_blank');}} className="bg-dark text-white m-2" id="project-card">
                <Card.Img src={comingSoonImage} id="project-image" alt="Moutain placeholder image" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <Card.Title id="project-title">Coming Soon</Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Card onClick={() => {window.open('https://chattleship.herokuapp.com/','_blank');}} className="bg-dark text-white m-2" id="project-card">
                <Card.Img src={comingSoonImage} id="project-image" alt="Moutain placeholder image" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <Card.Title id="project-title">Coming Soon</Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Card onClick={() => {window.open('https://chattleship.herokuapp.com/','_blank');}} className="bg-dark text-white m-2" id="project-card">
                <Card.Img src={comingSoonImage} id="project-image" alt="Moutain placeholder image" />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                    <Card.Title id="project-title">Coming Soon</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>    
    )
}