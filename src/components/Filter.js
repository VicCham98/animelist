import React, {Fragment}  from 'react';
import './style/Filter.css'

const Filter = ({dataFilter, onChange, value}) => {
    return (
        <Fragment>
            <select value={value} className="custom-select" onChange={onChange}>
                <option value="all" >All</option>
                {
                    dataFilter.map((genre) => {
                        return(
                            <option key={genre.id} value={genre.attributes.slug}>{genre.attributes.name}</option>
                        )
                    })
                }
            </select>
        </Fragment>
    );
};

export default Filter;