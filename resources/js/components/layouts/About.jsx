import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <div className='main'>
                <h3 className='nav-name' id="About">About Me</h3>

            <div className='rows'>
                <div className='grids'>
                    <h2 className='about'>Get to Know Me</h2>

                    <div className='about1' id='about1'>
                        I'm a web developer with 1+ year experience developing website applications using <a href="https://laravel.com" target='_blank' className='bold-about'>Laravel Framework</a> as BackEnd.
                        For FrontEnd I'm learning it with <a href="https://react.dev" target='_blank' className='bold-about'>ReactJS</a> and it's been going on for more than 3 months, and I'm learning the REST API in Laravel BackEnd.
                        While I can't say I have experience, I also have query skills in <a className='bold-about' target='_blank' href="https://www.mysql.com">MySQL</a> and <a href="https://mariadb.org" target='_blank' className='bold-about'>MariaDB</a>.
                    </div>

                    <div className='about1'>
                        I have also taken part in independent studies organized by <a href="https://www.nurulfikri.com" target='_blank' className='bold-about'>PT. Nurul Fikri Cipta Inovasi</a> through <a href="https://pusatinformasi.mitrakm.kemdikbud.go.id/hc/en-us" target='_blank' className='bold-about'>MSIB</a> in the Fullstack Web Developer Academy program.
                    </div>

                    <div className='about1'>
                        I had internship experience when I was in college. These experiences are as follows:
                    </div>

                    <div className='about-exp'>
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
                                        JavaScript which is integrated with mobile applications using the API.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='grids'>
                    <h1 className='about'>My Skills</h1>

                    <div className='skills-btn'>
                        <button type="button" className="btn btn-skill">HTML</button>
                        <button type="button" className="btn btn-skill">CSS</button>
                        <button type="button" className="btn btn-skill">Javascript</button>
                        <button type="button" className="btn btn-skill">React</button>
                        <button type="button" className="btn btn-skill">Bootstrap</button>
                        <button type="button" className="btn btn-skill">Laravel</button>
                        <button type="button" className="btn btn-skill">Responsive Web</button>
                        <button type="button" className="btn btn-skill">MySQL</button>
                        <button type="button" className="btn btn-skill">Github</button>
                        <button type="button" className="btn btn-skill">GIT</button>
                        <button type="button" className="btn btn-skill">Programming</button>
                        <button type="button" className="btn btn-skill">Coding</button>
                    </div>

                    <h1 className='about'>My Abilities</h1>

                    <div className='skills-btn'>
                        <button type="button" className="btn btn-skill">Problem Solving</button>
                        <button type="button" className="btn btn-skill">Time Management</button>
                        <button type="button" className="btn btn-skill">Critical Thinking</button>
                    </div>
                </div>

            </div>
        </div>
    )
  }
}
