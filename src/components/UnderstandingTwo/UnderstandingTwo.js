import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class UnderstandingTwo extends Component {

    state = {
        submission: {
            understanding: 0,
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
            type: "UNDERSTANDING",
            payload: this.state.submission,
        })

    }
    
    // function to consolidate the handleSubmit and submitButtonCounter function
    // also need to direct to next page
    handleClick = () => {
        console.log(`Lets go to support`);
        console.log('this.props', this.props);

        // programmatically go to support
        this.props.history.push('/3');
        this.handleSubmit();
        this.props.submitButtonCounter();
    }

    render() {
        return (
            <div>
                <Header />
                <label>How well are you understanding the content?</label>
                <input onChange={this.handleChangeFor}
                    type="number" name="understanding" min="0" max="5"></input>
                <button onClick={this.handleClick}>Next</button>
                <Footer />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(UnderstandingTwo);