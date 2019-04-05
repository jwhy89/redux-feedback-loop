import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ThankYou from '../ThankYou/ThankYou';


class CommentsFour extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    CommentsFour
                    <button><Link to="/thankyou">Thank You</Link></button>
                </div>
            </Router>
        );
    }
}

export default CommentsFour;