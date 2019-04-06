import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class FeelingOne extends Component {

    state = {
        submission: {
            feeling: 0,
        }

    }

    handleChangeFor = (event) => {
        this.setState({
            submission: {
                ...this.state.submission,
                [event.target.name]: event.target.value,
            }
        })
    }

    handleSubmit = () => {
        console.log(`state on submit `, this.state.submission);
        this.props.dispatch({
            type: "FEELING",
            payload: this.state.submission,
        })

    }

    handleClick = () => {
        console.log(`Lets go to understanding`);
        console.log('this.props', this.props);

        // programmatically go to understanding
        this.props.history.push('/2');
        this.handleSubmit();

    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <label>How are you feeling today?</label>
                    <input onChange={this.handleChangeFor} 
                        type="number" name="feeling" min="0" max="5"></input>
                    <button onClick={this.handleClick}>Next</button>
                    <Footer />
                </div>
            </Router>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(FeelingOne);