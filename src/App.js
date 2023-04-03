import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ProductsPage from './pages/ProductsPage';
import StoryPage from './pages/StoryPage';
import KitchenRecipesPage from './pages/KitchenRecipesPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import ScrollToTop from 'react-scroll-to-top';
import AddProductPage from './pages/AddProductPage';
import SinglePageOfProduct from './pages/SinglePageOfProduct';
import RefineryPage from "./pages/RefineryPage";
import ViewRapeseedProduct from "./pages/ViewRapeseedProduct";
import FloilCaresPage from "./pages/FloilCaresPage";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('adminLoggedIn'));
  
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/";
    })
  }
  
  return (
    <>
    <BrowserRouter>
    <Header isAuth={isAuth} signUserOut={signUserOut} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route path="/kitchen-recipes" element={<KitchenRecipesPage />} />
          <Route path="/our-refinery" element={<RefineryPage />} />
          <Route path="/floil-cares" element={<FloilCaresPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/add-product" element={<AddProductPage/>} />
          <Route path="/products/:productID" element={<SinglePageOfProduct />} />
          <Route path="/rapeseed-oil" element={<ViewRapeseedProduct />} />
        </Routes>
    </BrowserRouter>
    <ScrollToTop smooth />
    </>
  );
}

export default App;
