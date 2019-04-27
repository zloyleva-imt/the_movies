import React from 'react';
import {connect} from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pagination = () => {
    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                
            </PaginationItem>
        </Pagination>
    )
};

export default connect(
    state => ({
        page:state.moviesData.page,
        total_pages:state.moviesData.total_pages,
    })
)(Pagination);