import React from 'react';
import './style/Loader.css'

const Loader = () => {
    return (
        <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow-circle"></div>
            <div className="shadow-circle"></div>
            <div className="shadow-circle"></div>
            <span>Loading</span>
        </div>
    );
};

export default Loader;