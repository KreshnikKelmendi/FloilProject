import React ,{ useEffect } from "react";
import { Link } from "react-router-dom";
import refineryImg from "../assets/rafinery.png";
import floilProduct from "../assets/oilFloil.png";
import ProductCard from "./ProductCard";
import SvgMaterials from "./SvgMaterials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import KitchenProductCard from "./KitchenProductCard";

const HomeRafinery = () => {

   const {t} = useTranslation();

   useEffect(() => {
      AOS.init({ duration: 3000})
    }, [])

    return(
        <>
         <div className="container-fluid">
            <h1 className="rafText" data-aos="fade-up">
               <i className="raf">{t('home.rafItalic')}</i> {t('home.rafHeading')}
            </h1>

            <p className="rafPara" data-aos="fade-up">
               {t('home.rafParag')}
            </p>

            <Link to="/our-refinery"
               onClick={() => window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
               })}>
               <button className="refLocation" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  {t('home.seeMore')}
               </button>  
            </Link>

            <SvgMaterials />

            <img className="img-fluid refineryPhoto" src={refineryImg} alt="refineryPhoto" data-aos="zoom-in-up" data-aos-anchor-placement="top-center" />           
         </div>

         <div className="col-12 d-flex productImageDiv">
            <img className="img-fluid col-sm-12 col-md-12 col-lg-6 my-5 productImage" src={floilProduct} alt="floilProduct" />
               <div className="col-sm-12 col-md-12 col-lg-6 my-5 textImage">
                  <h2>{t('home.rapeseed')}</h2>
                  <p>
                     {t('home.rapeseedParag')}
                  </p>
                  <Link to="/rapeseed-oil">
                    <button className="btn btn-outline-light product-btn">{t('home.rapeseedBtn')}</button>
                  </Link>
               </div>
         </div>

         <div className="col-4 text-center productBase">
            <h2>
               {t('home.productsSection')}
            </h2>
            <p className="my-4">
               {t('home.productsParag')}
            </p>
         </div>

         <ProductCard />

         <div className="col-4 my-5 text-center productBase">
            <h2>
               {t('home.kitchenSection')}
            </h2>
            <p className="my-4">
               {t('home.kitchenParag')}
            </p>
         </div>

         <KitchenProductCard />
         </>
    )
}

export default HomeRafinery;