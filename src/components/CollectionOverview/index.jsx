import React from 'react';


import CollectionPreview from '../../components/CollectionPreview';

import {connect} from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';



const CollectionOverview = ({collections}) => {
    console.log(collections)
    return( 
        <div className='collection-overview'> 
        {collections.map(({id,...otherCollectionProps}) =>(
            <CollectionPreview key ={id} {...otherCollectionProps}/>
        ))
        }
        </div>
    )

}
const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
})
export default connect(mapStateToProps)(CollectionOverview);