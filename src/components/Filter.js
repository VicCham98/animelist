import React  from 'react';
import {Input, ButtonGroup} from "reactstrap";

const Filter = ({data}) => {
    return (
        <ButtonGroup>
            <Input type="select" name="select" id="exampleSelect">
                {
                    data.map((genre) => {
                        return(
                            <option key={genre.id}>{genre.attributes.name}</option>
                        )
                    })
                }
            </Input>
        </ButtonGroup>
    );
};

export default Filter;