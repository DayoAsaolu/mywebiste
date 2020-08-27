import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class landingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <img
                        src={require('./web1.jpg')} alt="me"
                        className="me-img"
                    />

                    <div className="banner-text">
                        <h1>Software Developer</h1>

                        <hr/> 
        <p>Python | HTML/CSS | Docker | JavaScript | React | Java </p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/dayo-asaolu-24ab3a9b/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>

                                {/* Github */}
                            <a href="https://github.com/DayoAsaolu?tab=repositories" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>

                            {/* Freecodecamp */}
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-free-code-camp" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>
                        
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }

}

export default landingPage;