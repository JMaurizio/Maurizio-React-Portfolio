import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Nav from './components/Nav'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/style.css'

export default function App() {
  const [page, setPage] = useState(Home)

  return (
    <>
      <section class="container-fluid d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column align-items-center">
        <Nav
        page={page}
        setPage={setPage}
        />
        {page}
      </section>
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));