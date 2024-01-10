import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
    <div>
        <nav className='d-flex justify-content-center navbar' id='navbar-scroll'>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span className="name">Andhika Bayu</span>
        </a>

        <ul className="nav nav-pills">
            <li className="nav-item"><a href="#Home" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#About" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#Project" className="nav-link">Project</a></li>
            <li className="nav-item"><a href="#Contact" className="nav-link">Contact</a></li>
        </ul>
        </nav>

    </div>
    )
  }
}
