import React from 'react';
import GetAnime from "../hooks/GetAnime";
import Loader from "../components/Loader";
import FatalError from "../components/500";
import {Redirect, useParams} from "react-router-dom";
import '../components/style/DetailAnime.css'
import Button from "reactstrap/es/Button";
import Card from "reactstrap/es/Card";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

const DetailAnime = ({search}) => {
    let params = useParams();
    const {data, loading, error} = GetAnime(`anime/${params.id}`);

    if (loading)
        return <Loader/>;

    if (error)
        return <FatalError/>;

    if (search==="") {
        return (
            <div>
                <div className="cover-image" style={{backgroundImage: `url(${data.attributes.coverImage !== null ? data.attributes.coverImage.small : null})`}}>
                    <div className="overlay"></div>
                </div>
                <Container>
                    <Row>
                        <Col lg={3} md={4} sm={4} xs={12}>
                            <Card className="back">
                                <img src={data.attributes.posterImage.small} alt={data.attributes.slug} />
                            </Card>
                        </Col>
                        <Col lg={6} md={8} sm={8} xs={12}>
                            <div>
                                <h2 className="text-left border">{data.attributes.canonicalTitle}</h2>
                                <p><small className="text-muted">{data.attributes.averageRating}% Rating</small></p>
                            </div>

                            <p>{data.attributes.synopsis}</p>
                        </Col>
                        <Col lg={3} className="border">
                            <Card className="mt-5 p-3">
                                <h5>Anime Details</h5>
                                <p><small>English: {data.attributes.titles.en_jp}</small></p>
                                <p><small>Japanese: {data.attributes.titles.ja_jp}</small></p>
                                <p><small>Type: {data.attributes.showType}</small></p>
                                <p><small>Status: {data.attributes.status}</small></p>
                                <p><small>Age Guide: {data.attributes.ageRatingGuide}</small></p>
                                <p><small>Popularity rank: {data.attributes.popularityRank}</small></p>
                                <p><small>Episodes: {data.attributes.episodeCount}</small></p>
                                <p><small>Start date: {data.attributes.startDate}</small></p>
                                <p><small>End date: {data.attributes.endDate}</small></p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return <Redirect from="/anime" to="/categorias" />
    }
};

export default DetailAnime;