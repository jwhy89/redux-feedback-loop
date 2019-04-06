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

  submitAll = () => {

    axios({
      method: 'POST',
      url: '/submission',
      data: this.props.reduxState.submissionReducer,
    }).then((response) => {
      console.log(`in post `, response);
      response.sendStatus(201);
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
