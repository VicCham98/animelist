import React  from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

const Destacado = ({data}) => {
    return (
        <div>
            {/*<Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>*/}
            <h4>Top Airing Anime!</h4>
            <ListGroup className="mt-3">
                {
                    data.map((anime) => {
                        return (
                            <ListGroupItem key={anime.id}>{anime.attributes.canonicalTitle}</ListGroupItem>
                        )
                    })
                }
            </ListGroup>
        </div>
    );
};

export default Destacado;