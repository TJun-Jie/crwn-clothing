import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`menu-item ${size}`}>
        <div style={{
            backgroundImage: `url(${imageUrl})`
            }} className="background-image" />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <h3 className="subtitle">SHOP NOW</h3>
        </div>
    </div>
)

export default MenuItem;