import { getDocs, collection } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { datapr } from '../data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const ProductCard = () => {
  const [productLists, setProductLists] = useState([]);

  const postsCollectionRef = collection(db, "product-posts")

  useEffect(() => {
       const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        //console.log(data)
        setProductLists(data.docs.map((doc) =>(
          {
            ...doc.data(), id: doc.id,
          }
        )))
       };

       getPosts();
  })
  return (
    <>
      
      <Carousel responsive={responsive}>
        {productLists?.map((item, index) => (
              <section className="card cardProduct" style={{width: '22rem'}} key={index} >
                  <img className="card-img-top floilPhoto" src={item.image} alt="Cardimage" />
                      <div className="card-body d-flex bodyCard">
                        <Link to={`/products/${item.id}`}>
                          <button className="btn btn-outline-light text-light btnProduct">View Product</button>
                          </Link>
                          <h5 className="card-title titleCard">{item.title}</h5>
                      </div>
              </section>
          ))}
          </Carousel>
      
    </>
  )
}

export default ProductCard;
