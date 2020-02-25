import React, {Component } from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Planner from './components/Planner';
import Home from './components/Home';
import Vacation from './components/Vacation';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/proPlann' component={Planner} />
            <Route exact path='/vacation' component={Vacation}/>
        </Switch>
    </main>
)

const Menu = () => (
    <nav className='nav nav-pills nav-justified'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/proPlann' className='nav-link'>Program Planner</Link>
        <Link to='/vacation' className='nav-link'>Vacation</Link>
    </nav>
)

export default class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Main/>
            </div>
        );
    }
}
