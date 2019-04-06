import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class SupportedThree extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <label>How well are you being supported?</label>
                    <input type="number"></input>
                    <button><Link to="/4">Next</Link></button>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default SupportedThree;