import React from 'react';
import {Route} from 'react-router-dom';


import CollectionOverview from '../../components/CollectionOverview';
import Collection from '../Collection';
import { convertCollectionsSnapshotToMap,firestore } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { updateColelctions } from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/WithSpinner';



 const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
 const CollectionPageWithSpinner = WithSpinner(Collection)


class Shop extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;
   
    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        const {updateColelctions} = this.props;

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateColelctions(collectionsMap);
            this.setState({loading: false})
            console.log(this.state.loading);
        })
    }    

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return( 
            <div className='shop-page'> 
                <Route exact path={match.path} render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )

    }
       
}

const mapDispatchToProps = dispatch => ({
    updateColelctions : collectionsMap => dispatch(updateColelctions(collectionsMap))
})
export default connect(null,mapDispatchToProps)(Shop);