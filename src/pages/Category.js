import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "reactstrap";
import Loader from "../components/Loader";
import FatalError from "../components/500";
import CardAnime from "../components/CardAnime";
import PaginationAnime from "../components/PaginationAnime";
import Axios from "axios";
import URL from "../config";
import GetAnime from "../hooks/GetAnime";

const Category = () => {
    const [page, setPage] = useState(0);
    let numPage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [numbers, setNumbers] = useState(numPage);

    const {data, loading, error} = GetAnime(`anime?page[limit]=18&page[offset]=${18*page}`);

    if (loading)
        return <Loader/>;

    if (error)
        return <FatalError/>;

    const handleClick = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'first':
                setPage(0);
                break;
            case 'previous':
                if (page===0)
                    setPage(0);
                else
                    setPage(page-1);
                break;
            case 'next':
                if (page===839)
                    setPage(page);
                else
                    setPage(page+1);
                break;
            case 'last':
                setPage(839);
                break;
            default:
                setPage(parseInt(e.target.id));
                break;
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    {/*<Filter*/}
                    {/*    data={data}*/}
                    {/*/>*/}
                    <h3>Resultados...</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PaginationAnime
                        numbers={numbers}
                        page={page}
                        onClick={handleClick}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardAnime
                        data={data}
                        lg="2"
                        pagination={true}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PaginationAnime
                        numbers={numbers}
                        page={page}
                        onClick={handleClick}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Category;