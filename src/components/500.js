import React from 'react';
import './style/500.css'
const FatalError = () => {
    return(
        <div>
            <h1>500</h1>
            <h2>Unexpected Error <b>:(</b></h2>
            <div className="gears">
                <div className="gear one">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="gear two">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="gear three">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default FatalError;