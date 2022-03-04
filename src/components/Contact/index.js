import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import { Button, Row, Stack } from "react-bootstrap";

export default function Contact() {
    const formName = document.getElementById('form-name');
    const formEmail = document.getElementById('form-email')
    const formMessage = document.getElementById('form-message')

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        if(!formName.value || !formEmail.value || !formMessage.value) {
            console.log("Please fill out the form")
            return
        }

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
            
            <form ref={form} onSubmit={sendEmail}>
                <Stack gap={2}>
                    <Row>
                        <label>Name:</label>
                        <input type="name" placeholder="Name" name="user_name" id="form-name"/>
                    </Row>
                    <Row>    
                        <label>Email address:</label>
                        <input type="email" placeholder="name@example.com" name="user_email" id="form-email" />
                    </Row>
                    <Row>    
                        <label>Message:</label>
                        <input type="textarea" rows={6} name="message" placeholder="Your text here" id="form-message" />
                    </Row>
                    <Button variant="primary" type="submit" value="Send">Submit</Button>
                </Stack>
            </form>
        </div>    
    )
}