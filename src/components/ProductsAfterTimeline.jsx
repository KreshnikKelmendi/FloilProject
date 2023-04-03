import React from 'react'
import floilVaj from "../assets/vajFloil.png";
import floilVaj2 from "../assets/floil2023.png";
import { useTranslation } from "react-i18next";

const ProductsAfterTimeline = () => {
   const {t} = useTranslation();

  return (
    <>
    <div className="col-12 d-flex p-3">
            <img className="col-6 my-5 productImage" src={floilVaj} alt="floilProduct" />
               <div className="col-6 my-5 afterTimeline">
                  <h2>
                     {t('story.secondHeading')}
                  </h2>

                  <p>
                     {t('story.secondParag')}
                  </p>
                  
                  <button className="btn btn-outline-light product-btn">
                     {t('story.btn')}
                  </button>
               </div>
         </div>

         <div className="col-12 d-flex  headingsAfterTimeline p-3">
          
                <h2>Lorem ipsum is simply dummy text of the printing.</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                     an unknown printer took a galley of type 
                     and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>
                <button className="btn btn-outline-dark btnAfterTimeline">View Product</button>
                <div className="col-6 my-5"></div>
                <img className="col-6 imageAfterTimeline" src={floilVaj2} alt="floilProduct" />
            </div>
   
       
         </>
  )
}

export default ProductsAfterTimeline