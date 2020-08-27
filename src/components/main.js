import React from 'react';
import { Route, Switch } from 'react-router-dom';
import landingPage from './landingPage';
import aboutme from './aboutme';
import contact from './contact';
import projects from './projects';
import resume from './resume';


const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <Route path="/aboutme" component={aboutme} />
        <Route path="/contact" component={contact} />
        <Route path="/resume" component={resume} />
        <Route path="/projects" component={projects} />
    </Switch>
)

export default Main;