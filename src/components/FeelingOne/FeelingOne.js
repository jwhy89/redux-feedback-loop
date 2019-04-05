import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class FeelingOne extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <label>How are you feeling today?</label>
                    <input type="number"></input>
                    <button><Link to="/2">Next</Link></button>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default FeelingOne;