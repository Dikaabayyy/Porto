import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
    <div>
        <nav className='d-flex justify-content-center py-3 mb-4 navbar'>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span className="name">Andhika Bayu</span>
        </a>

        <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About Me</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Skill</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Education</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Project</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact Me</a></li>
        </ul>
        </nav>

    </div>
    )
  }
}
