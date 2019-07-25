import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

    handleClick = () => {
        console.log(`Lets go to thankyou`);
        console.log('this.props', this.props);

        // programmatically go to understanding
        this.props.history.push('/thankyou');
        this.props.submitAll();
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
                    <footer>
                        <h1>Review Your Feedback</h1>
                        <p>Feelings: {this.props.reduxState.submissionReducer.feeling}</p>
                        <p>Understanding: {this.props.reduxState.submissionReducer.understanding}</p>
                        <p>Support: {this.props.reduxState.submissionReducer.support}</p>
                        <p>Comments: {this.props.reduxState.submissionReducer.comments}</p>
                        <br />
                        <button onClick={this.handleClick}>Submit</button>
                    </footer>
                </div>
            );
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Footer);