import React, { Component } from 'react';
import { Grid, Cell, ListItemContent, List, ListItem} from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    
                    <div style={{display: 'flex', fontSize: '25px', fontFamily: 'Anton'}}> 
                        {this.props.skillGroup}

                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-js-square" aria-hidden="true"/> 
                                        {this.props.skills} </ListItemContent>
                        </ListItem>
                    </List>

                        
                    </div>




                    
                </Cell>
            </Grid>
        )
    }
}

export default Skills;