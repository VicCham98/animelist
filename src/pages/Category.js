import React, {useState} from 'react';
import {Container, Row, Col} from "reactstrap";
import Loader from "../components/Loader";
import FatalError from "../components/500";
import CardAnime from "../components/CardAnime";
import PaginationAnime from "../components/PaginationAnime";
import GetAnime from "../hooks/GetAnime";

const Category = ({filter, search}) => {
    const [page, setPage] = useState(0);
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const {data, loading, error} = GetAnime(`anime?${filter}page[limit]=18&page[offset]=${18*page}`);
    const topePage = 839;

    // if (search==="") {
    //     setFilter(`anime?page[limit]=18&page[offset]=${18*page}`);
    // } else {
    //     setFilter(`anime?page[limit]=18&page[offset]=${18*3}`);
    // }

    if (loading)
        return <Loader/>;

    if (error)
        return <FatalError/>;

    let auxNumb = [];

    const optionPaginatorNumber = (page, value) => {
        switch (value) {
            case 'first':
                for (let i=0; i<10; i++){
                    auxNumb[i]=i;
                }
                break;
            case 'previous':
                if (page < 10){
                    page = 10;
                }
                page = page - 10;
                for (let i=0; i<10; i++){
                    auxNumb[i]=page+i;
                }
                break;
            case 'next':
                page += 1;
                for (let i=0; i<10; i++){
                    auxNumb[i]=page+i;
                }
                break;
            case 'last':
                let top=topePage-10;
                for (let i=0; i<=10; i++){
                    auxNumb[i]=top+i;
                }
                break;
            default:
                break
        }
        return auxNumb;
    };

    const handleClick = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'first':
                setPage(0);
                setNumbers(optionPaginatorNumber(page, 'first'));
                break;
            case 'previous':
                if (page!==0){
                    setPage(page-1);
                    if (page === numbers[0])
                        setNumbers(optionPaginatorNumber(page, 'previous'));
                }
                break;
            case 'next':
                if (page!==topePage){
                    setPage(page+1);
                    if (page === numbers[numbers.length-1])
                        setNumbers(optionPaginatorNumber(page, 'next'));
                }
                break;
            case 'last':
                setPage(topePage);
                setNumbers(optionPaginatorNumber(page, 'last'));
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