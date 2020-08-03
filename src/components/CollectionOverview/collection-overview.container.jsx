import React from 'react'
import {connect} from 'react-redux';

import {compose} from 'redux';

import WithSpinner from '../WithSpinner'
import CollectionOverview from './index'
import { selectCollectionFetching } from '../../redux/shop/shop-selectors';


const mapStateToProps = state => ({
    isLoading: selectCollectionFetching(state)
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;