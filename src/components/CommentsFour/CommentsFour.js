import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class CommentsFour extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <label>Comments</label>
                    <input type="text"></input>
                    <button><Link to="/submit">Next</Link></button>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default CommentsFour;