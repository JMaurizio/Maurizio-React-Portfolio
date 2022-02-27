import React from 'react';
import Nav from './components/Nav'
import './App.css';
import './assets/style.css'

function App() {
  return (
    
    <main>
        <section class="container-fluid d-flex flex-row align-items-center">
            <div class="col-1">
                <Nav></Nav>
            </div>
            <div class="col-10 offset-1 d-flex flex-wrap flex-column justify-content-center align-items-center">
                <p class="h1 text-center offset-2" id="intro-p">
                    Hello, I'm <span id="JMText">Joshua Maurizio</span> 
                    and I'm a full-stack web developer. 
                </p>
            </div>    
        </section>
    </main>
  );
}

export default App;
