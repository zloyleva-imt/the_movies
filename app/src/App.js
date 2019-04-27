import React, { Component, Fragment } from 'react';
import './App.css';

import MoviesList from './components/MoviesList'
import Header from './components/Header'
import Pagination from './components/Pagination'

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import asyncFetch from './actions/fetchMoviesAction';
import SearchMovies from "./components/SearchMovies";

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header />

          <SearchMovies/>

          <MoviesList />

          <Pagination/>
      </Fragment>
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
