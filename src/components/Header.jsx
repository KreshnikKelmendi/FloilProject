import BackspaceIcon from '@mui/icons-material/Backspace';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import FloilSvg from './FloilSvg';
import { LogoutOutlined } from '@mui/icons-material';
import loginIcon from "../assets/user.png";
import cares from "../assets/cares.png";
import { Box, Modal } from '@mui/material';
import { useTranslation } from 'react-i18next';

const styles = {
  position: 'absolute',
  top: '10%',
  left: '90.5%',
  transform: 'translate(-50%, 10%)',
  width: 150,
  height: 150,
  bgcolor: 'white',
  p: 2,
  sm: 600,
      md: 900,
      lg: 1200,
};

const Header = ({isAuth, signUserOut }) => {
  const {t, i18n} = useTranslation();

  const onChangeLanguage = (e) => {
     i18n.changeLanguage(e.target.value)
  }

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const [openDropdown, setDropdown] = useState(false);

  const handleOpenDropdown = () => {
    setDropdown(true);
  }
  const handleCloseDropdown = () =>{
    setDropdown(false);
  }

  useEffect(() => {
    for (let index = 0; index < document.getElementsByClassName('language').length; index++) {
      const element = document.getElementsByClassName('language')[index];
        if(element.value === i18n.language){
          element.setAttribute("selected", "true")
        }
    }
  })
 

  return (
    <>
    <header>
              
      <h3><Link className='brand-name' to="/"><FloilSvg /></Link></h3>
          <nav ref={navRef}>
            <Link className='firstLink' to="/products">{t("menu.products")}</Link>
            <Link className='firstLink' to="/our-story">
                <select id="dropdown">
                  <option value="">{t('menu.story')}</option>
                  <option>Evente</option>
                  <option>FAQ</option>
                </select>
            </Link>
            <Link className='firstLink' to="/our-refinery">{t("menu.refinery")}</Link>
            <Link className='firstLink' to="/kitchen-recipes">{t("menu.kitchen")}</Link>
            <Link className='firstLink' to="contact-us">{t("menu.contact")}</Link>
            <Link className='firstLink floilCares' to="/floil-cares">{t("menu.foundation")}
            <img className='floilPhotoCares' src={cares} alt="floilcares" /></Link>
             
              { !isAuth ? ( 
                  <Link className='lastChild' to="/login"><img className="loginIcon" src={loginIcon} alt="loginIcon" /></Link> 
              ):(
                <>
                  <a className='myAccount' onClick={handleOpenDropdown}><LogoutOutlined /></a>
                    <Modal open={openDropdown} onClose={handleCloseDropdown}>
                      <Box sx={styles}>
                        <Link to="/add-product" className='btn'>Add Product</Link>
                        <h5 className='btn text-danger' onClick={signUserOut}>Logout</h5>
                      </Box>
                    </Modal>
                </>
              )}
              
              <select className='lang' aria-label='Default select example' onChange={onChangeLanguage}>
                  <option value="en" className='language'>EN</option>
                  <option value="alb" className='language'>ALB</option>
                </select>
             

            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <BackspaceIcon />
            </button>
          </nav>
          <button className='nav-btn' onClick={showNavbar}>
            <MenuIcon />
          </button>
    </header>
</>
  )
}

export default Header