import React, {Fragment, useState} from 'react';
import {Card, CardImg, CardText, CardTitle, Col} from "reactstrap";
import Row from "reactstrap/es/Row";
import DetailAnime from "./DetailAnime";

const CardAnime = ({data, lg}) => {
    const [liveDemo, setLiveDemo] = useState(false);
    const [animeData, setAnimeData] = useState([]);

    return (
        <Fragment>
            <Row>
                {
                    data.map((anime) => {
                        return (
                            <Col className="py-3" key={anime.id} lg={lg} md={3} sm={4} xs={6}>
                                <Card inverse className="border text-center text-white" href="/" tag="a" onClick={(e) => {
                                    e.preventDefault();
                                    setAnimeData({
                                        id: anime.id,
                                        canonicalTitle: anime.attributes.canonicalTitle,
                                        synopsis: anime.attributes.synopsis,
                                        averageRating: anime.attributes.averageRating,
                                        startDate: anime.attributes.startDate,
                                        ageRatingGuide: anime.attributes.ageRatingGuide,
                                        posterImage: anime.attributes.posterImage != null ? anime.attributes.posterImage.tiny : null,
                                        episodeCount: anime.attributes.episodeCount,
                                        youtubeVideoId: anime.attributes.youtubeVideoId,
                                    });
                                    setLiveDemo(true);
                                }}>
                                    <CardImg width="100%" src={anime.attributes.posterImage != null ? anime.attributes.posterImage.small : null} alt="Card image cap" />
                                    <CardTitle className="px-1"><strong>{anime.attributes.canonicalTitle}</strong></CardTitle>
                                    <CardText className="text-muted">
                                        <small><em>{anime.attributes.startDate}</em></small>
                                    </CardText>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            <DetailAnime
                animeData={animeData}
                liveDemo={liveDemo}
                setLiveDemo={setLiveDemo}
            />
        </Fragment>
    );
};

export default CardAnime;