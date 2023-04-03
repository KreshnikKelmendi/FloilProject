import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from "../assets/404notfound.jpg";

const ErrorPage = () => {
  return (
    <div className='text-center errorPage'>
        <img className='img-fluid' src={pageNotFound} alt="pageNotFound" />
        <Link className='btn btn-outline-info text-dark errorButton' to="/">Go Home</Link>
    </div>
  )
}

export default ErrorPage