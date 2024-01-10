import React from 'react';
import ReactDOM from 'react-dom/client';
import "../../css/app.css";

import Header from './Header'
import Footer from './Footer'
import Home from './layouts/Home'
import About from './layouts/About'
import Project from './layouts/Project'

function Example() {
    return (
        <div>
        <Header/>

            <div className='container scrollspy-example' data-bs-spy="scroll" data-bs-target="#navbar-scroll" data-bs-root-margin="0px 0px -25%" data-bs-smooth-scroll="true" tabIndex="0">
                <Home/>
                <About/>
                <Project/>
                <Footer/>
            </div>

        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
