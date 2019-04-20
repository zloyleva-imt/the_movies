import React, { Component } from 'react';
import './App.css';

import MoviesList from './components/MoviesList'
import Header from './components/Header'

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import asyncFetch from './actions/fetchMoviesAction';
import SearchMovies from "./components/SearchMovies";

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />

          <SearchMovies/>

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
