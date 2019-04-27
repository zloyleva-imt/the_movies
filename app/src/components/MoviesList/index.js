import React from 'react';
import {connect} from "react-redux";

import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';

import './style.css';

const  MoviesList = ({movies}) => {
    return (
        <Container>
            <Row>
                <Col xs="12" ><h1>Discover New Movies</h1></Col>
                {
                    movies.map((el,i) => (
                        <Col xs="12" md="6" className="movie-item my-1" key={el.id}>
                            <Card className="flex-row">
                                <Col xs="6" className="img-movies">
                                    <img className="img-movies-thumbnail" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+el.poster_path} alt=""/>
                                </Col>

                                <CardBody>
                                    <CardTitle>
                                        <div className="chart-vote_average">
                                            {el.vote_average }
                                        </div>
                                        <div className="movie-title">
                                            <h2>{ el.title }</h2>
                                            <span>{ el.release_date }</span>
                                        </div>
                                    </CardTitle>
                                    <CardText>
                                        { cutOverview(el.overview) }
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
};

const cutOverview = (text) => text.split(" ", 20).join(" ") + "...";

export default connect(
    state => ({movies:state.moviesData.results})
)(MoviesList);