import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import WithSpinner from '../../components/WithSpinner';
import Collection from './index';
import { selectCollectionLoaded } from '../../redux/shop/shop-selectors';

const mapStateToProps = state => ({
    isLoading: !selectCollectionLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);

export default CollectionContainer;