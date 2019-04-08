import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FeelingOne from '../FeelingOne/FeelingOne';
import UnderstandingTwo from '../UnderstandingTwo/UnderstandingTwo';
import SupportThree from '../SupportThree/SupportThree';
import CommentsFour from '../CommentsFour/CommentsFour';
// import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {

  // function for submit button counter
  // will need to prop into components
  submitButtonCounter = () => {
    // dispatch an action which tells redux to do something
    const action = { type: 'COUNTER' };
    this.props.dispatch(action);
  }

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

  // axios POST request to submit feedback to database
  submitAll = () => {

    axios({
      method: 'POST',
      url: '/submission',
      data: this.props.reduxState.submissionReducer,
    }).then((response) => {
      console.log(`in post `, response);
      // will call functions to reset redux states
      this.resetRedux();
      this.resetButtonCounter();
    })
      .catch((error) => {
        console.log(`Couldn't submit feedback`, this.props.reduxState.submissionReducer, error);
        alert(`Sorry, couldn't submit your feedback. Try again later`);
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(routeProps) =>
            <FeelingOne {...routeProps} 
            submitButtonCounter={this.submitButtonCounter} />} />
          <Route exact path="/2" render={(routeProps) =>
            <UnderstandingTwo {...routeProps} 
            submitButtonCounter={this.submitButtonCounter} />} />
          <Route exact path="/3" render={(routeProps) =>
            <SupportThree {...routeProps} 
            submitButtonCounter={this.submitButtonCounter} />} />
          <Route exact path="/4" render={(routeProps) =>
            <CommentsFour {...routeProps} 
            submitButtonCounter={this.submitButtonCounter} />} />
          <Route exact path="/submit" render={(routeProps) =>
            <Footer {...routeProps} 
            submitAll={this.submitAll} />} />
          <Route exact path="/thankyou" component={ThankYou} />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);
