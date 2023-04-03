import React from 'react'
import { dataRecommendation } from '../testDataPagination'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 
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

const KitchenProductCard = () => {
  return (
    <>
    <Carousel responsive={responsive}>
        {dataRecommendation?.map((item, key) => (
              <section className="card kitchenCard" style={{width: '290px', height:'300px'}} key={key}>
                  <img className="card-img-top paginationImage" src={item.img} alt="Cardimage" />
                      <div className="card-body d-flex paginationBody">
                        <Link to={`/products/${item.id}`} className="blogView">
                          View Blog
                          </Link>
                          <p className="card-title paginationTitle">{item.name}</p>
                          <p className='paginationDesc'>Lorem Ipsum is simply dummy text of the printing.</p>
                          <svg className="line-svg" width="180" height="2" viewBox="0 0 244 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <line x1="-8.74228e-08" y1="1" x2="244" y2="0.999979" stroke="#249A70" stroke-width="2"/>
                          </svg>
                          <p className="paginationPara">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type</p>
                      </div>
              </section>
          ))}
          </Carousel>
          <Link className='viewAll' to="/kitchen-recipes"
               onClick={() => window.scrollTo({
                  top: 800,
                  left: 0,
                  behavior: "smooth",
               })}>
            View all
            </Link>
    </>
  )
}

export default KitchenProductCard