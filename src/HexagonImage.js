import React from 'react';

const HexagonImage = ({ imageUrl }) => {
    return (
        <div className="abstrata">
            <img src={imageUrl} alt="Hexagon" className="abstrata-image" />
        </div>
    );
};

export default HexagonImage;