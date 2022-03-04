import React from "react";
import { Form } from "react-bootstrap";

export default function Contact() {
    
    return (
        <div class="col-10 offset-1 d-flex flex-row flex-wrap justify-content-center align-items-center">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your message here</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>    
    )
}