import React, {Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, CardText } from 'react-mdl';


class projects extends Component {
    
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="project-grid">

            

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/drafts/ap4924y2.png) center / cover'}}></CardTitle>
                    <CardText style={{color: '#0f255c'}}>
                        Weather App
                    </CardText>
                    <CardActions border>
                        <button colored>
                        <a href="https://github.com/DayoAsaolu/weatherapp_django" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                        <button colored>CodePen</button>
                        <button colored>Live</button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/drafts/ap4924y2.png) center / cover'}}></CardTitle>
                    <CardText style={{color: '#0f255c'}}>
                        Church Managment System (CMS)
                    </CardText>
                    <CardActions border>
                        <button colored>Github</button>
                        <button colored>CodePen</button>
                        <button colored>Live</button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                
                </div>
            )
        }
        
        
        
        else if(this.state.activeTab === 1){
            return(
                <div className="project-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.kindpng.com/picc/m/78-788134_javascript-logo-hd-png-download.png) center / cover'}}></CardTitle>
                    <CardText style={{color: '#0f255c'}}>
                        Image Transformations
                    </CardText>
                    <CardActions border>
                        <button colored>
                        <a href="https://github.com/DayoAsaolu/Image-Transformations-Navigation-and-Projections" target="_blank" rel="noopener noreferrer">Github</a> 
                            </button>
                            
                        <button colored><a href="https://codepen.io/davidasaolu/project/editor/DvJnWY" target="_blank" rel="noopener noreferrer">Codepen</a></button>

                        <button colored><a href="https://codepen.io/davidasaolu/project/live/DvJnWY/" target="_blank" rel="noopener noreferrer">Live</a></button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.kindpng.com/picc/m/78-788134_javascript-logo-hd-png-download.png) center / cover'}}></CardTitle>
                    <CardText style={{color: '#0f255c'}}>
                    Lights and Materials in WebGL
                    </CardText>
                    <CardActions border>
                    <button colored>
                        <a href="https://github.com/DayoAsaolu/WebGl---Lightings" target="_blank" rel="noopener noreferrer">Github</a> </button>
                            
                        <button colored><a href="https://codepen.io/davidasaolu/project/editor/APKaON" target="_blank" rel="noopener noreferrer">Codepen</a></button>

                        <button colored><a href="https://codepen.io/davidasaolu/project/live/APKaON/" target="_blank" rel="noopener noreferrer">Live</a></button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.kindpng.com/picc/m/78-788134_javascript-logo-hd-png-download.png) center / cover'}}></CardTitle>
                    <CardText style={{color: '#0f255c'}}>
                        Tessellation and Twist in WebGL
                    </CardText>
                    <CardActions border>
                    <button colored>
                        <a href="https://github.com/DayoAsaolu/Tessellation-and-Twist-in-WebGL" target="_blank" rel="noopener noreferrer">Github</a> </button>
                            
                        <button colored><a href="https://codepen.io/davidasaolu/pen/RwaoqpK" target="_blank" rel="noopener noreferrer">Codepen</a></button>

                        <button colored><a href="https://codepen.io/davidasaolu/full/RwaoqpK" target="_blank" rel="noopener noreferrer">Live</a></button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png) center / cover'}}></CardTitle>
                    <CardText style={{color: '#0f255c'}}>
                        This website
                    </CardText>
                    <CardActions border>
                    <button colored>
                        <a href="https://github.com/DayoAsaolu/Tessellation-and-Twist-in-WebGL" target="_blank" rel="noopener noreferrer">Github</a> </button>
                            
                        <button colored><a href="https://codepen.io/davidasaolu/pen/RwaoqpK" target="_blank" rel="noopener noreferrer">Codepen</a></button>

                        <button colored><a href="https://codepen.io/davidasaolu/full/RwaoqpK" target="_blank" rel="noopener noreferrer">Live</a></button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div><h1>This is Node/Mongodb</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Django</Tab>
                    <Tab>JavaScript/WebGL</Tab>
                    <Tab>React</Tab>
                    <Tab>NodeJs</Tab>
                    <Tab>Java</Tab>
                   
                </Tabs>

                {/* <section className="projects-grid"> */}
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                {/* </section> */}
            </div>
        )
    }

}

export default projects;