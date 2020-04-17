import React, {Fragment} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Link} from "react-router-dom";

const ModalAnime = ({animeData, liveDemo, setLiveDemo, setSearch}) => {
    // alert(animeData.id);
    return (
        <Fragment>
            <Modal className="modal-lg" isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
                <ModalHeader>
                    <strong className="font-weight-bold h5">{animeData.canonicalTitle}</strong>
                    {" / "+animeData.episodeCount+" chapters"}
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => setLiveDemo(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <img className="float-left m-3 img-thumbnail" src={animeData.posterImage} alt={animeData.canonicalTitle}/>
                    <p>{animeData.synopsis}</p>
                    <div className="embed-responsive embed-responsive-16by9 mt-3">
                        <iframe title={animeData.canonicalTitle} className="embed-responsive-item" src={`https://www.youtube.com/embed/${animeData.youtubeVideoId}`} frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                    </div>
                    <small className="text-muted">{"Started: "+animeData.startDate+" - Age Rating: "+animeData.ageRatingGuide+" - Rating: "+animeData.averageRating}</small>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-around">
                    <div className="d-inline w-30 mx-auto">
                        <Button
                            className="btn-link"
                            color="default"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => setLiveDemo(false)}
                        >
                            Close
                        </Button>
                    </div>
                    <div className="divider" />
                    <div className="d-inline w-30 mx-auto">
                        <Button
                            className="btn-link"
                            color="success"
                            type="button"
                            tag={Link}
                            to={`/anime/${animeData.id}`}
                            onClick={() => {
                                setLiveDemo(false);
                                setSearch("");
                            }}
                        >
                            More details
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
        </Fragment>
    );
};

export default ModalAnime;