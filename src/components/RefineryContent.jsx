import React from "react";
import refineryImg from "../assets/rafinery.png";
import secondRefineryPhoto from "../assets/Rectangle 25.png";
import { useTranslation } from "react-i18next";

const RefineryContent = () => {
   const {t} = useTranslation();

    return (
        <div className="my-2 container-fluid">
        <h1 className="rafText" >
           <i className="raf">Rafineria</i> is simply dummy text of the printing
        </h1>

        <p className="refineryPara" >
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
           unknown printer took a galley of type and scrambled 
           it to make a type specimen book. It has survived not only five centuries.
        </p>

        <img className="img-fluid my-5" src={refineryImg} alt="refineryPhoto" />  
        
        <div className="col-12">
         <div className="container-fluid d-flex p-5">
         <img className="imageOfRefinery" src={secondRefineryPhoto} alt="refineryPhoto2" />
         <h3 className="textContent">{t('refinery.heading')}</h3>
         <p className="paragraphContent">{t('refinery.subHeading')}</p>
         </div>
         </div>         
     </div>
    )
}

export default RefineryContent;