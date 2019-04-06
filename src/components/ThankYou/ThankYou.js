import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

class ThankYou extends Component {
    render() {
        return (
            <div>
                <Router>
                <header>
                    <h1>Feedback!</h1>
                </header>
                <h2>Thank You!</h2>
                <br />
                <button><Link to="/">Leave New Feedback</Link></button>
                </Router >
            </div>
        );
    }
}

export default ThankYou;