import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FeelingOne from '../FeelingOne/FeelingOne';
import UnderstandingTwo from '../UnderstandingTwo/UnderstandingTwo';
import SupportedThree from '../SupportedThree/SupportedThree';
import CommentsFour from '../CommentsFour/CommentsFour';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
      </div>
    );
  }
}

export default App;
