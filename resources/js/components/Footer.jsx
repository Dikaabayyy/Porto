import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div className='main' id="Contact">
            <div className='row'>
                <div className='col'>
                    <h3 className='about'>Contact Me</h3>

                    <form action='/send' method='POST' encType='multipart/form-data'>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-contact" id="email" name='email' required/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">What do you want to talk to me about?</label>
                            <textarea className="form-contact" id="message" name='message' rows="5" required></textarea>
                        </div>

                        <div className='mb-3 submit'>
                            <button type='submit' className='submit-button'>Send</button>
                        </div>

                    </form>
                </div>

                <div className='col text-center'>
                    <h3 className='about'>Social</h3>

                    <a href="https://www.instagram.com/dikaabayyy/" target='_blank'><i className="bi bi-instagram icons"></i></a>
                    <a href="https://www.linkedin.com/in/andhikabayu/" target='_blank'><i className="bi bi-facebook icons"></i></a>
                    <a href="https://github.com/Dikaabayyy" target='_blank'><i className="bi bi-github icons"></i></a>
                    <a href="https://www.linkedin.com/in/andhikabayu/" target='_blank'><i className="bi bi-linkedin icons"></i></a>

                </div>


            </div>
        </div>
    )
  }
}
