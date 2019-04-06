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
            type: "COMMENTS",
            payload: this.state.submission,
        })

    }

    handleClick = () => {
        console.log(`Lets go to footer`);
        console.log('this.props', this.props);

        // programmatically go to comments
        this.props.history.push('/submit');
        this.handleSubmit();

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