import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className="resume">
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={require('./index.png')}
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Dayo Asaolu </h2>
                        <h4 style={{color: "grey"}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>Graduate of Computer Science with practical experiences in web application development,
                            as well as backend development which were gained through several coursework and
                            projects. Proficient in Python, Java, JavaScript, and possess the ability to collaborate within
                            a team. Seeking for an employment in a development company and within a collaborative
                            team to enable me to apply my skills and knowledge.</p>
                            <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                            <h5>Address</h5>
                            <p>Topsail Road, Newfoundland, St.John's</p>
                            <h3>Phone</h3>
                            <p>(204) 296 2278</p>
                            <h5>Email</h5>
                            <p>asaoludavid@gmail.com</p>
                            <h5>Web</h5>
                            <p>mywebsite.com</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2015}
                            endYear ={2020}
                            schoolName="Memorial University Of Newfoundland, St. John's, Newfoundland, Canada"
                            Degree="B.Sc. Computer Science"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience
                            startYear={"2020 Jan"}
                            endYear={"2020 Apirl"}
                            JobName="University Team Project - COMP 4770"
                            JobDescription1="* Collaborated with team members to design a web-based game using
                            HTML5/JavaScript"   
                            
                            JobDescription2="Designed the game part of the game editor"
                            
                            JobDescription3="* Designed and implemented a MongoDB Database to store user and game data"

                            JobDescription4="* Documented the features and functionalities of the game application"

                            JobDescription5="* Demonstrated the developed web application to professor and other course mates"

                            // JobDescription6="YouTube Game Demo"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2> Skills </h2>
                        <Skills skillGroup="Programming Languages" skills="Python, Bash/Shell, JavaScript, Java, C++, MySQL" />

                        <Skills skillGroup="Technologies/Tools" skills="Docker, Git, Github, AWS, UnitTesting, Visual Studio Code, SublimeText"/>

                        <Skills skillGroup="Database" skills="MySQL, MongoDb"/>

                        <Skills skillGroup="Operating System"
                        skills="Linux, Windows"/>

                        <Skills skillGroup="Frameworks"
                        skills="Flask, Django, NodeJs" />

                        <Skills skillGroup="Libraries"
                        skills="React, Python library, Js Library, WebGL"/>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }

}


export default Resume;