import React from "react";
import { Card } from "react-bootstrap";
import { Route } from "react-router-dom";
import programmerDashboard from "../../assets/Images/programmer-dashboard.png"

export default function Projects() {
    
    return (
        <div class="col-10 offset-1 d-flex flex-row flex-wrap justify-content-center align-items-center">
            <Card class="m-2" id="project-card">    
                <Route path='/programmer-dashboard' component={() => {window.location.href= 'https://joelkovalcson.github.io/Programmer-Dashboard/'; return null}} class="text-decoration-none">
                    <Card.Img  src={programmerDashboard} alt="programmer-dashboard screenshot"/>    
                    <Card.ImgOverlay class="card-img d-flex align-items-center justify-content-center" id="project-image">
                        <Card.Title class="card-title" id="project-title">Programmer Dashboard</Card.Title>
                    </Card.ImgOverlay>
                </Route>
            </Card>
        </div>    
    )
}