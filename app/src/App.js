import React, { Component } from 'react';
import './App.css';

import MoviesList from './components/MoviesList'

import {Link,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import asyncFetch from './actions/fetchMoviesAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The movie</h1>

          <Link to="/?page=2">Page 2</Link>

          <MoviesList />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("componentDidUpdate");
  }
}

export default withRouter(connect(
    null,
    dispatch => ({
        fetchMovies(){
            dispatch(asyncFetch());
        }
    })
)(App));
