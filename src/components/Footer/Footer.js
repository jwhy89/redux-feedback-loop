import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class Footer extends Component {

    // function for reset button counter
    // will need to prop into footer
    resetButtonCounter = () => {
    // dispatch an action which tells redux to do something
        const action = { type: 'RESET_COUNTER' };
        this.props.dispatch(action);
    }

    // function to reset redux state for submission object
    resetRedux = () => {
        console.log(`state on resetRedux `);
        this.props.dispatch({
        type: "RESET",
        })
    }

    // function to reset button counter and redux state
    resetForm = () => {
        this.resetRedux();
        this.resetButtonCounter();
    }

    handleClick = () => {
        console.log(`Lets go to thankyou`);
        console.log('this.props', this.props);

        // programmatically go to understanding
        this.props.history.push('/thankyou');
        this.props.submitAll();
    }

    handleClickResetForm = () => {
        console.log(`Lets go to FeelingOne`);
        console.log('this.props', this.props);

        // programmatically go to FeelingOne
        this.props.history.push('/');
        this.resetForm();
    }

    render() {
        if (this.props.reduxState.counterReducer < 4 ) {
            return (
                <div>
                    <footer>
                        <h1>Your Feedback</h1>
                            <p>Feelings: {this.props.reduxState.submissionReducer.feeling}</p>
                            <p>Understanding: {this.props.reduxState.submissionReducer.understanding}</p>
                            <p>Support: {this.props.reduxState.submissionReducer.support}</p>
                            <p>Comments: {this.props.reduxState.submissionReducer.comments}</p>
                            <br />
                            <button disabled>Incomplete</button>
                            <br />
                            <button onClick={this.handleClickResetForm}>Reset Form</button>
                    </footer>
                </div>
            );
        }
        else {
            return (
                <div>
                    <footer>
                        <h1>Review Your Feedback</h1>
                        <p>Feelings: {this.props.reduxState.submissionReducer.feeling}</p>
                        <p>Understanding: {this.props.reduxState.submissionReducer.understanding}</p>
                        <p>Support: {this.props.reduxState.submissionReducer.support}</p>
                        <p>Comments: {this.props.reduxState.submissionReducer.comments}</p>
                        <br />
                        <button onClick={this.handleClick}>Submit</button>
                        <br />
                        <button onClick={this.handleClickResetForm}>Reset Form</button>
                    </footer>
                </div>
            );
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default withRouter(connect(mapReduxStateToProps)(Footer));