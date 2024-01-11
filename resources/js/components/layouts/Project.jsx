import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
        <div className='main'>
            <h3 className='nav-name' id="Project">Project</h3>
            <h5 className='project'>
                Here you will find several projects that I have created during my time as a Web Developer.
            </h5>

            <div className='row'>
                <div className='col center-card'>
                    <div className="card-project">
                        <img src="img/project/P1.jpg" className="img-project"/>
                        <div className="card-body">
                            <h5 className="card-title">B-Air</h5>
                            <p className="card-text">B-Air is a website for testing someone's English skills by providing several test package options.</p>

                            <div className='btn-p'>
                                <button type="button" className="btn btn-project" data-bs-toggle="modal" data-bs-target="#Project2Modal">See More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col center-card'>
                    <div className="card-project">
                        <img src="img/project/P2.jpg" className="img-project"/>
                        <div className="card-body">
                            <h5 className="card-title">Makobat</h5>
                            <p className="card-text">Makobat is a website used to monitor hypertension patients who are undergoing treatment.</p>

                            <div className='btn-p'>
                                <button type="button" className="btn btn-project" data-bs-toggle="modal" data-bs-target="#Project2Modal">See More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='row'>
                <div className='col center-card'>
                    <div className="card-project">
                        <img src="img/project/P3.jpg" className="img-project"/>
                        <div className="card-body">
                            <h5 className="card-title">Portfolio</h5>
                            <p className="card-text">This website is an illustration of the skills and abilities that I have so far as a web developer.</p>

                            <div className='btn-p'>
                                <button type="button" className="btn btn-project" data-bs-toggle="modal" data-bs-target="#Project3Modal">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}
