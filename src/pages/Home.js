import React, {useEffect, useState} from 'react';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Destacado from "../components/Destacado";
import RecentlyAnime from "../components/RecentlyAnime";
import Axios from "axios";
import URL from "../config";
import CarouselAnime from "../components/CarouselAnime";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getRecentlyAnimes = async () => {
            try {
                let response = await Axios.get(`${URL}anime?page[limit]=20&page[offset]=0`);
                let data = await response.data;
                setData(data.data);
            } catch (e) {
                console.log(e)
            }
        };
        getRecentlyAnimes();
    }, []);

    return (
        <Container className="mt-4">
            <Row>
                <Col md={12} lg={3}>
                    <Destacado
                        data={data}
                    />
                </Col>
                <Col md={12} lg={9}>
                    <CarouselAnime
                        data={data}
                    />
                    <RecentlyAnime
                        data={data}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;