import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class CommentsFour extends Component {

    state = {
        submission: {
            comments: '',
        }

    }

    // function to store input to current component state
    handleChangeFor = (event) => {
        this.setState({
            submission: {
                ...this.state.submission,
                [event.target.name]: event.target.value,
            }
        })
    }

    // function to send object prop to redux state
    handleSubmit = () => {
        console.log(`state on submit `, this.state.submission);
        this.props.dispatch({
            type: "COMMENTS",
            payload: this.state.submission,
        })

    }

    // function to consolidate the handleSubmit and submitButtonCounter function
    // also need to direct to next page, footer component with conditional render
    handleClick = () => {
        console.log(`Lets go to footer`);
        console.log('this.props', this.props);

        // programmatically go to comments
        this.props.history.push('/submit');
        this.handleSubmit();
        this.props.submitButtonCounter();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <label>Comments</label>
                <input onChange={this.handleChangeFor}
                    type="text" name="comments"></input>
                <button onClick={this.handleClick}>Next</button>
                <Footer />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(CommentsFour);