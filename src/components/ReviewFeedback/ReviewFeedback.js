import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

// couldn't figure conditional for button so created a copy of footer
class ReviewFeedback extends Component {
    render() {
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
                        <button onClick={this.props.submitAll}><Link to="/thankyou">Submit</Link></button>
                    </footer>
                </Router>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ReviewFeedback);