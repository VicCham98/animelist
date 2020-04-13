import React, {useEffect, useState} from 'react';
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Destacado from "../components/Destacado";
import RecentlyAnime from "../components/RecentlyAnime";
import Axios from "axios";
import URL from "../config";
import CarouselAnime from "../components/CarouselAnime";
import Loader from "../components/Loader";
import FatalError from "../components/500";

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRecentlyAnimes = async () => {
            try {
                let response = await Axios.get(`${URL}anime?page[limit]=20&page[offset]=0`);
                let data = await response.data;
                setData(data.data);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                setError(error);
                console.log(e)
            }
        };
        getRecentlyAnimes();
    }, []);

    if (loading)
        return <Loader/>;

    if (error)
        return <FatalError/>;

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