import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class UnderstandingTwo extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <label>How well are you understanding the content?</label>
                    <input type="number"></input>
                    <button><Link to="/3">Next</Link></button>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default UnderstandingTwo;