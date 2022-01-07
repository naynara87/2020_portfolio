import React from 'react';
import PropTypes from 'prop-types';

function PortInfo({ title, category, img, src }) {
    return (
        <div className="port__item">
            <figure className="port__item__img">
                <a href={src}>
                    <img src={img} alt={title} />
                </a>
            </figure>
            <div className="port__item__txt">
                <h2>{title}</h2>
                <p>{category}</p>
            </div>
        </div>
    );
}
PortInfo.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default PortInfo;