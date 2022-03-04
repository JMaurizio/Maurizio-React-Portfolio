import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import { Button } from "react-bootstrap";

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
        <div class="col-10 offset-1 d-flex flex-col flex-wrap justify-content-center align-items-center">
            <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="name" placeholder="Name" name="user_name" id="form-name"/>
                    <label>Email address</label>
                    <input type="email" placeholder="name@example.com" name="user_email" id="form-email" />
                    <label>Your message here</label>
                    <input type="textarea" rows={6} name="message" id="form-message" />
                <Button variant="primary" type="submit" value="Send">Submit</Button>
            </form>
        </div>    
    )
}