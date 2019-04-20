import React from 'react';
import {connect} from "react-redux";

const  MoviesList = ({movies}) => {
    return (
        <div>

            {
                movies.map((el,i) => (
                    <div key={i}>{el}</div>
                ))
            }

        </div>
    )
};

export default connect(
    state => ({movies:state.movies})
)(MoviesList);