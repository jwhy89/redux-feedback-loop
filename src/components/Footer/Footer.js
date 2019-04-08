import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Footer extends Component {

    submitButtonCounter = () => {
        // dispatch an action which tells redux to do something
        const action = { type: 'COUNTER' };
        this.props.dispatch(action);
    }

    resetButtonCounter = () => {
        // dispatch an action which tells redux to do something
        const action = { type: 'RESET_COUNTER' };
        this.props.dispatch(action);
    }

    buttonStatus = () => {
        if (this.props.reduxState.counterReducer < 4 ) {
            return false;
        }
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
                    </footer>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Router>
                        <footer>
                            <h1>Review Your Feedback</h1>
                            <p>Feelings: {this.props.reduxState.submissionReducer.feeling}</p>
                            <p>Understanding: {this.props.reduxState.submissionReducer.understanding}</p>
                            <p>Support: {this.props.reduxState.submissionReducer.support}</p>
                            <p>Comments: {this.props.reduxState.submissionReducer.comments}</p>
                            <br />
                            <button onClick={this.resetButtonCounter}><Link to="/thankyou">Submit</Link></button>
                        </footer>
                    </Router>
                </div>
            );
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Footer);