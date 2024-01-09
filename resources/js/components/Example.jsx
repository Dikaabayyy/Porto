import React from 'react';
import ReactDOM from 'react-dom/client';
import "../../css/app.css";

import Header from './Header'
import Footer from './Footer'
import Home from './layouts/Home'
import About from './layouts/About'
import Skill from './layouts/Skill'
import Education from './layouts/Education'
import Experience from './layouts/Experience'
import Project from './layouts/Project'

function Example() {
    return (
        <div>

        <Header/>

        <Home/>
        <About/>
        <Skill/>
        <Education/>
        <Experience/>
        <Project/>

        <Footer/>
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
