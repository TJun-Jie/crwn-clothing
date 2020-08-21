import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
        className={`menu-item ${size}`}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">SHOP NOW</h3>
        </div>
    </div>
)

export default MenuItem;