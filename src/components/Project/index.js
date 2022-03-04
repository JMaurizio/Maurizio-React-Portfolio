import React from "react";
import { Card } from "react-bootstrap";
import programmerDashboard from "../../assets/Images/programmer-dashboard.png"

export default function Projects() {

    return (
        <div class="col-10 offset-1 d-flex flex-row flex-wrap justify-content-center align-items-center">
            {/* <Card class="m-2" id="project-card">    
                <Route path='/programmer-dashboard' component={() => {window.location.href= 'https://joelkovalcson.github.io/Programmer-Dashboard/'; return null}} class="text-decoration-none">
                    <Card.Img  src={programmerDashboard} alt="programmer-dashboard screenshot"/>    
                    <Card.ImgOverlay class="card-img d-flex align-items-center justify-content-center" id="project-image">
                        <Card.Title class="card-title" id="project-title">Programmer Dashboard</Card.Title>
                    </Card.ImgOverlay>
                </Route>
            </Card> */}
            <Card onClick={() => {window.open('https://joelkovalcson.github.io/Programmer-Dashboard/','_blank');}} className="bg-dark text-white">
                <Card.Img src={programmerDashboard} alt="Programer Dashboard Screenshot" />
                <Card.ImgOverlay>
                    <Card.Title>Programmer Dashboard</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>    
    )
}