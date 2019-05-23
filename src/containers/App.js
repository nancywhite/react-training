import React from 'react';
import { Link, Route } from 'react-router-dom';
import PollContainer from './PollContainer';
import AboutUs from '../components/AboutUs.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <hr/>
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/poll">Poll</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                </ul>
                <div>
                    <Route path="/poll" component={PollContainer}/>
                    <Route path="/about" component={AboutUs}/>
                </div>
                <hr/>
            </div>
        );
    }
}

export default App;