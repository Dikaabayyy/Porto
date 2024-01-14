import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div className='main'>
            <h3 className='nav-name' id="Home"></h3>

            <div className='rows home'>
                <div className='grids'>
                    <img src="img/1.jpg" alt="" className='img'/>
                </div>

                <div className='grids'>
                    <div className='name-h'>
                        <span className='hi'>Hi</span>, I'm <br />
                        <span>Andhika Bayu</span><br />
                        <span>Web Developer</span>
                    </div>

                </div>
            </div>
        </div>
    )
  }
}

