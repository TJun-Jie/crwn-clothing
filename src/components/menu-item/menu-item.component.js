import React from 'react';
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`menu-item ${size}`} onClick={ () => history.push(`${match.url}${linkUrl}`)} >
        <div style={{
            backgroundImage: `url(${imageUrl})`
            }} className="background-image" />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <h3 className="subtitle">SHOP NOW</h3>
        </div>
    </div>
)

export default withRouter(MenuItem);