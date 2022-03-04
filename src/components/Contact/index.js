import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import { Form, Button } from "react-bootstrap";

export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_gmvq74u",
            "template_90a9mqm",
            form.current,
            "vTYsIeRHKADboDw9W"
        )
        .then((result) => {
            console.log(result.text);
        },
        (error) => {
            console.log(error.text)
        });
    };
    
    return (
        <div class="col-10 offset-1 d-flex flex-row flex-wrap justify-content-center align-items-center">
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" name="user_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="user_email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="textarea">
                    <Form.Label>Your message here</Form.Label>
                    <Form.Control as="textarea" rows={6} name="message" />
                </Form.Group>
                <Button variant="primary" type="submit" value="Send">Submit</Button>
            </Form>
        </div>    
    )
}