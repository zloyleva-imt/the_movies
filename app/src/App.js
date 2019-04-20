import React, { Component } from 'react';
import './App.css';

import MoviesList from './components/MoviesList'

import {connect} from "react-redux";

import asyncFetch from './actions/fetchMoviesAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The movie</h1>

          <MoviesList />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchMovies();
  }
}

export default connect(
    null,
    dispatch => ({
        fetchMovies(){
            dispatch(asyncFetch());
        }
    })
)(App);
