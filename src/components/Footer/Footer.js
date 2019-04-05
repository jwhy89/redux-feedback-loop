import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <Router>
                <footer>
                    <h1>Review Your Feedback</h1>
                        <p>Feelings: 5</p>
                        <p>Understanding: 5</p>
                        <p>Support: 5</p>
                        <p>Comments: I love this stuff!</p>
                        <br />
                        <button disabled>Incomplete</button>
                        <br />
                        <button><Link to="/thankyou">Submit</Link></button>
                </footer>
                </Router>
            </div>
        );
    }
}

export default Footer;