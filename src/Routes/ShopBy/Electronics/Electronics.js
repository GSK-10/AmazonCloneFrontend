
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import './Electronics.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function Electronics() {


  let [products1, setProducts1] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      let response = await axios.get("http://localhost:8090/Electronics?category=Laptops")
      let productList1 = response.data
      setProducts1(productList1)
      console.log(productList1)
    }
    fetchUsers()
  }, [])




  return (
    <>

      <div className='me-3 ms-3 mb-5'>

        <h3 className='mt-4 ms-4'> Electronics </h3>

        <div className='bg-white '>

          <h4 className='me-auto mb-4 mt-3 headings'> Laptops </h4>
          <Swiper
            style={{
              "--swiper-navigation-color": "white",
            }}
            className="mySwiper mx-2 mb-5 ps-3 pe-3"
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            pagination={{
              clickable: true,
            }}
            // loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {
              products1.map((data, key) =>

                <SwiperSlide key={key} style={{ height: "23rem" }}>

                  <Link className="card cd mb-5" to="/Electronics">

                    <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-2' />
                    <div className="card-body ">
                      <p className='pb-2'> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon>
                        {data.price}.00 </p>
                      <h6 className="ct card-title "> </h6>

                    </div>
                    <h6> </h6>

                  </Link>

                </SwiperSlide>

              )
            }

          </Swiper>
        </div>



        <div className='bg-white '>

          <h4 className='me-auto mb-4 mt-3 headings'> Desktops </h4>
          <Swiper
            style={{
              "--swiper-navigation-color": "white",
            }}
            className="mySwiper mx-2 mb-5 ps-3 pe-3"
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            pagination={{
              clickable: true,
            }}
            // loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {
              products1.map((data, key) =>
                <SwiperSlide key={key} className='text-start'>
                  {data.length === 0 && <p className=''>Data Loading</p>}
                  <NavLink className="card cd border-dark g-0" to={`/${data.category}/${data.id}`} style={{ height: "23rem", width: "14rem" }}>
                    <div className="card-title">
                      {data.mrp !== data.price && <span className='mx-2 mt-2 badge text-uppercase fw-small' style={{ backgroundColor: "#84BE52", position: "fixed" }}>{(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}%off</span>}
                      <img src={data.img} style={{ maxHeight: "150px" }} className=' w-75 img pt-2 p-1 rounded card-img-top' />
                    </div>
                    <div className="card-body ellipsis">
                      <h6 className="ct card-title " style={{ lineHeight: "1.5em", height: "3em", overflow: "hidden" }}>{data.name}</h6>
                      <div className='text-muted fs-6 fst-italic' style={{ overflow: "hidden", whiteSpace: "nowrap" }}>Mkt: {data.manufracture}</div>
                      <div className='text-muted h6'>Best Price* <span className='fw-bold' style={{ color: "#EF4482" }}>₹ {data.price}</span> </div>
                      <div className='text-muted'>Mrp
                        <span className='px-2 text-decoration-line-through'>
                          ₹{data.mrp}
                        </span>
                      </div>
                      {/* <button onClick={() => postData(data)} className="btn w-100 fw-bold text-uppercase" style={{ backgroundColor: "#24AEB1", color: "white" }}>Add To Cart</button> */}
                    </div>
                  </NavLink>
                </SwiperSlide>
              )}


          </Swiper>
        </div>












      </div>

    </>
  )
}

export default Electronics