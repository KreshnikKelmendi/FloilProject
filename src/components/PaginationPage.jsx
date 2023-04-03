import React, { useEffect, useState } from 'react'
import { dataTest } from '../testDataPagination'
import { Link } from "react-router-dom";

const PaginationPage = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  
  useEffect(() => {
    setData(dataTest)
    setCollection([...new Set(dataTest?.map((item) => item.name))])
  }, [])

  const filter_data = (itemData) => {
    const filter_name = dataTest.filter((item) => item.name === itemData);
    setData(filter_name);
  }

  return (
<>
    <div className=' buttonsFilter'>
         <div className='d-flex buttonsFilterData'>
        <button onClick={() => setData(dataTest)}>All</button>
          {
            collection?.map((item) => <button className='collectionButtons' onClick={() => {filter_data(item)}}>{item}</button>)
          }
         
    </div>
    </div>
   
   <div className='paginationPage'>
      
        {
          data?.map((item) => (
              <section className="card paginationCard" style={{width: '290px'}}>
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
          
      </div>
      </>
  )
}

export default PaginationPage