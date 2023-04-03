import React from "react";
import { useParams } from "react-router-dom";

const SinglePageOfProduct = () => {
    const { productID } = useParams();
    
     return (
        <p>{productID}</p>
     )
}

export default SinglePageOfProduct;