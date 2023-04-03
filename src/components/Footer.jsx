import React from "react";

const Footer = () => {
    return(
        <>
        <footer>
        <div className="content">
        <div className="middle part">
            <div className="title "></div>
            <div><a href="#">Produktet</a></div>
            <div><a href="#">Historiku</a></div>
            <div><a href="#">Rafineria</a></div>
            <div><a href="#">Receta Kuzhine</a></div>
            <div><a href="#">Kontakt</a></div>
            <div><a href="#">Donacion</a></div>
          </div>
          <div className="left part">
            <div className="upper">
              <div className="title ">About us</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda exercitationem in.</p>
            </div>
            <div className="lower">
              <div className="title ">Contact</div>
              <div className="phone">
                <a href="#"><i className="fas fa-phone-volume"></i>+123 45 67 89</a>
                
              </div>
              <div className="email">
                <a href="#"><i className="fas fa-envelope"></i>someone@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="right part">
            <div className="title ">Subscribe</div>
            
            
              <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
           
          </div>
        </div>
       
      </footer>
      </>
    )
}

export default Footer;