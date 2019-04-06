import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
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
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Footer);