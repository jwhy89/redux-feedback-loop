import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FeelingOne from '../FeelingOne/FeelingOne';
import UnderstandingTwo from '../UnderstandingTwo/UnderstandingTwo';
import SupportedThree from '../SupportedThree/SupportedThree';
import CommentsFour from '../CommentsFour/CommentsFour';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {
  render() {
    return (
      <Router>
      {/* <Switch> */}
        <div className="App">
          <Route exact path="/" component={Header} />
            <Route exact path="/" component={FeelingOne} />
            <Route exact path="/" component={Footer} />
          <Route exact path="/2" component={Header} />
            <Route exact path="/2" component={UnderstandingTwo} />
            <Route exact path="/2" component={Footer} />
          <Route exact path="/3" component={Header} />
            <Route exact path="/3" component={SupportedThree} />
            <Route exact path="/3" component={Footer} />
          <Route exact path="/4" component={Header} />
            <Route exact path="/4" component={CommentsFour} />
            <Route exact path="/4" component={Footer} />
          <Route exact path="/thankyou" component={ThankYou} />
          {/* <Footer /> */}
        </div>
      {/* </Switch> */}
      </Router>
    );
  }
}

export default App;
