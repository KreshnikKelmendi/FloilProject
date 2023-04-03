import React, { useEffect } from 'react'
import floilImg from "../assets/Imazh 1.png";
import floiloil from "../assets/floiloil.jpg";
import HomeRafinery from './HomeRafinery';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next"

const fadeImages = [
  {url: floilImg,},
  {url: floiloil,},
];

const Home = () => {

  const {t} = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 3000})
  }, [])

  return (
    <>
    <div className="col-12 slide-container">
        <Slide>
          {fadeImages.map((fadeImages, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img className=' display-photo' src={fadeImages.url} alt="slide" />
              </div>
            </div>
          ))}
        </Slide>
        </div>
        
            
            <h1 className='headingsText' data-aos="fade-up">
              {t('home.title')}
            </h1>
            <p className='paragraphText' data-aos="fade-right">
             {t('home.parag')}
            </p>

        
    
      <HomeRafinery />
    </>
  )
}

export default Home