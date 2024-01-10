import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <div className='main'>
                <h3 className='nav-name' id="About">About Me</h3>

            <div className='row'>
                <div className='col'>
                    <h2 className='about'>Get to Know Me</h2>

                    <div className='about1' id='about1'>
                        I'm a web developer with 1+ year experience developing website applications using <a href="https://laravel.com" className='bold-about'>Laravel Framework</a> as BackEnd.
                        For FrontEnd I'm learning it with <a href="https://react.dev" className='bold-about'>ReactJS</a> and it's been going on for more than 3 months, and I'm learning the REST API in <a href="https://laravel.com" className='bold-about'>Laravel</a> BackEnd.
                        While I can't say I have experience, I also have query skills in <a className='bold-about' href="https://www.mysql.com">MySQL</a> and <a href="https://mariadb.org" className='bold-about'>MariaDB</a>.
                    </div>

                    <div className='about1'>
                        I have also taken part in independent studies organized by <a href="https://www.nurulfikri.com" className='bold-about'>PT. Nurul Fikri Cipta Inovasi</a> through <a href="" className='bold-about'>MSIB</a> in the Fullstack Web Developer Academy program.
                    </div>

                    <div className='about1'>
                        I had internship experience when I was in college. These experiences are as follows:
                    </div>

                    <div>
                        <table className="table-ex">
                            <tbody>
                                <tr>
                                    <th rowSpan='2' className='ex-c'><i className="bi bi-check-circle-fill"></i></th>
                                    <th rowSpan='2' className='ex-d'>June - August 2022</th>
                                    <th className='ex-p'>Web Developer</th>
                                </tr>
                                <tr>
                                    <td className='ex-i'>Develop a website "Test your English Proficiency" with the PHP Laravel framework and JavaScript.</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="table-ex">
                            <tbody>
                                <tr>
                                    <th rowSpan='2' className='ex-c'><i className="bi bi-check-circle-fill"></i></th>
                                    <th rowSpan='2' className='ex-d'>January - June 2023</th>
                                    <th className='ex-p'>Web Developer</th>
                                </tr>
                                <tr>
                                    <td className='ex-i'>Develop a website monitoring patient adherence in drug consumption with the PHP Laravel framework and
                                        JavaScript which is integrated with mobile applications using the API. </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col'>
                    <h1 className='about'>My Skills</h1>

                    <div className='skills-btn'>
                        <button type="button" className="btn btn-skill">HTML</button>
                        <button type="button" className="btn btn-skill">CSS</button>
                        <button type="button" className="btn btn-skill">Javascript</button>
                        <button type="button" className="btn btn-skill">React</button>
                        <button type="button" className="btn btn-skill">GIT</button>
                        <button type="button" className="btn btn-skill">Github</button>
                        <button type="button" className="btn btn-skill">Responsive Web</button>
                        <button type="button" className="btn btn-skill">SQL Basic</button>
                        <button type="button" className="btn btn-skill">Laravel</button>
                    </div>
                </div>

            </div>
        </div>
    )
  }
}
