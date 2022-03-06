import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import { Stack } from "react-bootstrap";

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
                    <h3 class="form-header">Email me directly</h3>
                    <div class="form-group">
                        <label class="form-label">Name:</label>
                        <input class="form-input" type="name" placeholder="Name" name="user_name" id="form-name"/>    
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email address:</label>
                        <input class="form-input" type="email" placeholder="name@example.com" name="user_email" id="form-email" />   
                    </div>
                    <div class="form-group">
                        <label class="form-label">Message:</label>
                        <input class="form-input" name="message" placeholder="Your message here" id="form-message" />
                    </div>
                    <button class="form-button" type="submit" value="Send">Submit</button>
                </Stack>
            </form>
        </div>    
    )
}