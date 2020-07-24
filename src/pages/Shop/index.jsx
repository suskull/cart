import React, {useState} from 'react';

import SHOP_DATA from '../Shop/shop-data'
import CollectionPreview from '../../components/CollectionPreview';


const Shop = () => {

    const [shopDatas, setShopDatas] = useState(SHOP_DATA);
    console.log(shopDatas);
    return( 
        <div className='shop-page'> 
        {shopDatas.map(({id,...otherCollectionProps}) =>(
            <CollectionPreview key ={id} {...otherCollectionProps}/>
        ))}
        </div>
    )

}

export default Shop;