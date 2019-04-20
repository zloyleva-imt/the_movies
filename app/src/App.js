import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";

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
            const asyncFetch = () => {
                return dispatch => {
                    setTimeout(()=>{
                        const res = ["Film 1"];
                        dispatch({type:"FETCH_MOVIES", payload:res});
                    }, 2000);
                }
            };
            dispatch(asyncFetch());
        }
    })
)(App);
