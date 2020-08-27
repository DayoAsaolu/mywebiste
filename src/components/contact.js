import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Dayo Asaolu</h2>
                        <img 
                            src={require('./web.jpg')}
                            alt="avatar"
                            style={{height: '300px'}}
                             />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>   
                        <hr/> 
                        
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                         (204)-296-2278</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        asaoludavid@gmail.com</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/dayo-asaolu-24ab3a9b/" target="_blank" rel="noopener noreferrer">Dayo Asaolu</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default contact;