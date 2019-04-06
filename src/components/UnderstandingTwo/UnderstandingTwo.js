import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class UnderstandingTwo extends Component {

    state = {
        submission: {
            understanding: 0,
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
            type: "UNDERSTANDING",
            payload: this.state.submission,
        })

    }

    handleClick = () => {
        console.log(`Lets go to supported`);
        console.log('this.props', this.props);

        // programmatically go to supported
        this.props.history.push('/3');
        this.handleSubmit();

    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <label>How well are you understanding the content?</label>
                    <input onChange={this.handleChangeFor}
                        type="number" name="understanding" min="0" max="5"></input>
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

export default connect(mapReduxStateToProps)(UnderstandingTwo);