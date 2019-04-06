import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class SupportThree extends Component {

    state = {
        submission: {
            support: 0,
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
            type: "SUPPORT",
            payload: this.state.submission,
        })

    }

    handleClick = () => {
        console.log(`Lets go to comments`);
        console.log('this.props', this.props);

        // programmatically go to comments
        this.props.history.push('/4');
        this.handleSubmit();

    }

    render() {
        return (
            <div>
                <Header />
                <label>How well are you being supported?</label>
                <input onChange={this.handleChangeFor}
                    type="number" name="support" min="0" max="5"></input>
                <button onClick={this.handleClick}>Next</button>
                <Footer />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(SupportThree);