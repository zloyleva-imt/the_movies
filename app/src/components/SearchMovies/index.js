import React from 'react';
import {Container,Row,Col} from 'reactstrap';

import './style.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch);

const SearchMovies = () => {
    return (
        <Container fluid={true} className="Container_Search">
            <Container>
                <Row>
                    <Col>
                        <form action="" className="Search_Form">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <input type="text" className="Search_Input"
                                placeholder="Search for movies"
                            />
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default SearchMovies;