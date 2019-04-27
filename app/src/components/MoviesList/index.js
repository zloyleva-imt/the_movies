import React from 'react';
import {connect} from "react-redux";

const  MoviesList = ({movies}) => {
    return (
        <div>
            <p>Movies list</p>
            {/*{*/}
                {/*movies.map((el,i) => (*/}
                    {/*<div key={i}>{el}</div>*/}
                {/*))*/}
            {/*}*/}

        </div>
    )
};

export default connect(
    state => ({movies:state.moviesData.results})
)(MoviesList);