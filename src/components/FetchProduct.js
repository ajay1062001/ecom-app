import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchProductById} from '../services/ProductService';

function FetchProduct() {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        fetchProductById(id).then(resp=>setProduct(resp.data));
    })
    return(
        <div>
            {
                product !=null && 
                <div>
                  <p>ProductId: {product.productId}</p>
                  <p>Name: {product.productName}</p>
                  <p>Price: {product.productPrice}</p>
                  <p>Category: {product.category}</p>
                </div>
            }
        </div>
    )
}
export default FetchProduct;