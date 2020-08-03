import React from 'react';
import {Route} from 'react-router-dom';


import CollectionOverview from '../../components/CollectionOverview';
import Collection from '../Collection';
import { convertCollectionsSnapshotToMap,firestore } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { fetchCollectionsStart, fetchCollectionsStartAsync } from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/WithSpinner';
import {selectCollectionLoaded } from '../../redux/shop/shop-selectors';
import CollectionOverviewContainer from '../../components/CollectionOverview/collection-overview.container';
import CollectionContainer from '../Collection/collection.container';




//  const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
//  const CollectionPageWithSpinner = WithSpinner(Collection)



class Shop extends React.Component {
   
   
    componentDidMount() {
        const {fetchCollectionsStart} = this.props
        fetchCollectionsStart();
    }    

    render() {
        const {match} = this.props;
        return( 
            <div className='shop-page'> 
                <Route exact path={match.path} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer}/>
            </div>
        )

    }
       
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(Shop);