import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import { fetchUser } from '../actions';
import Landing from './Landing';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={() => <h1>Surveys</h1>} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {
  fetchUser
})(App);
