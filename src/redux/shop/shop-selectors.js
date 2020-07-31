import {createSelector} from 'reselect';

const selectShop = state => state.shop;

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//convert obj to arr
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);


export const selectCollection = collectionId => 
    createSelector(
        [selectShopCollections],
        collections => (collections ? collections[collectionId] : null)
    )

