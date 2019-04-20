import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";

import asyncFetch from './actions/fetchMoviesAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        React
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchMovies();
  }
}

export default connect(
    state => state,
    dispatch => ({
        fetchMovies(){
            dispatch(asyncFetch());
        }
    })
)(App);
