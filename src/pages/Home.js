import React from 'react';
import {Container, Row, Col} from "reactstrap/es";
import Destacado from "../components/Destacado";
import CardAnime from "../components/CardAnime";
import CarouselAnime from "../components/CarouselAnime";
import Loader from "../components/Loader";
import FatalError from "../components/500";
import GetAnime from "../hooks/GetAnime";

const Home = () => {
    const {data, loading, error} = GetAnime(`anime?page[limit]=20&page[offset]=0`);

    if (loading)
        return <Loader/>;

    if (error)
        return <FatalError/>;

    return (
        <Container className="mt-4">
            <Row>
                <Col md={12} lg={3} className="d-md-none d-lg-block d-sm-none">
                    <Destacado
                        data={data}
                    />
                </Col>
                <Col md={12} lg={9}>
                    <CarouselAnime
                        data={data}
                    />
                    <h3>Animes Recientes</h3>
                    <CardAnime
                        data={data}
                        lg="3"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;