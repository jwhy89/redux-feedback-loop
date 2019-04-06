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
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {

  resetRedux = () => {
    console.log(`state on resetRedux `);
    this.props.dispatch({
      type: "RESET",
    })
  }

  submitAll = () => {

    axios({
      method: 'POST',
      url: '/submission',
      data: this.props.reduxState.submissionReducer,
    }).then((response) => {
      console.log(`in post `, response);
      // TO DO clear object in redux state
      this.resetRedux();
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
          <Route exact path="/" component={FeelingOne} />
          <Route exact path="/2" component={UnderstandingTwo} />
          <Route exact path="/3" component={SupportThree} />
          <Route exact path="/4" component={CommentsFour} />
          <Route exact path="/submit" render={(routeProps) =>
            <Footer {...routeProps} submitAll={this.submitAll} />} />
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
