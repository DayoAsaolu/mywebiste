import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return(
            <Grid className="education">
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.JobName}</h4>
                    <h5>{this.props.JobDescription1}</h5>
                    <h5>{this.props.JobDescription2}</h5>
                    <h5>{this.props.JobDescription3}</h5>
                    <h5>{this.props.JobDescription4}</h5>
                    <h5>{this.props.JobDescription5}</h5>
                    <h5>{this.props.JobDescription6}</h5>
                    <a href="https://www.youtube.com/watch?v=8Oru1UNgKRI" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-youtube" rel="noopener noreferrer" aria-hidden="true"/>
                            </a>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;