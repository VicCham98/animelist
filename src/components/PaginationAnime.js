import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationAnime = ({onClick, page, numbers}) => {

    return (
        <nav aria-label="Page navigation example">
            <Pagination
                className="pagination justify-content-center"
            >
                <PaginationItem>
                    <PaginationLink
                        href="/"
                        onClick={onClick}
                        id="first"
                    >
                        First
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="/"
                        onClick={onClick}
                        id="previous"
                    >
                        Previous
                    </PaginationLink>
                </PaginationItem>
                {
                    numbers.map((number, i) => {
                        return (
                            <PaginationItem key={i} className={page===number ? "active" : null} >
                                <PaginationLink
                                    href="/"
                                    onClick={onClick}
                                    id={number}
                                    pagina={page}
                                >
                                    {number}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })
                }
                <PaginationItem>
                    <PaginationLink
                        href="/"
                        onClick={onClick}
                        id="next"
                    >
                        Next
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="/"
                        onClick={onClick}
                        id="last"
                    >
                        Last
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        </nav>
    );
};

export default PaginationAnime;