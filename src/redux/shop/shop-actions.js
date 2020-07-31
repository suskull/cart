import ShopActionTypes from './shop-types';

export const updateColelctions = collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})