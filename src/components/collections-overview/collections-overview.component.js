import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/cart/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


const CollectionsOverview = ({collections}) =>(
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);