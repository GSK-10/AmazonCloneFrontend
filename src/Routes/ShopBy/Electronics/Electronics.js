
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
// import './Electronics.scss'
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


  let [products2, setProducts2] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      let response = await axios.get("http://localhost:8090/Electronics?category=Desktops")
      let productList2 = response.data
      setProducts2(productList2)
      console.log(productList2)
    }
    fetchUsers()
  }, [])




  return (
    <>

      <div className='me-3 ms-3 mb-5 p-0'>

        <h3 className='mt-4 ms-4'> Electronics </h3>


        <div className='bg-white ms-3 me-3'>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
            }}
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/2/AmazonStores/A21TJRUUN4KGV/949f049247ac423d8ddd078187c80b32.w3000.h1200._CR0%2C0%2C3000%2C1200_SX1920_.png" alt="" className='img1 img-fluid rounded card-img-top p-2 mt-0' />
            </SwiperSlide>

          </Swiper>
        </div>

        {/* SLIDER - 1 */}
        <div className='bg-white'>

          <h4 className='me-auto mb-4 mt-3 headings'> Laptops </h4>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
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

                <SwiperSlide key={key} >

                  <Link className="card cm mb-5 text-start" to={`/${data.category}/${data.id}`} >

                    <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-2 pt-2 mt-1' />
                    <div className="card-body ellipsis">
                      <small><h6 className="ct card-title  " style={{ lineHeight: "1rem", height: "3em", overflow: "hidden" }}> {data.name}  </h6> </small>
                      {/* <div className='text-muted fs-6 fst-italic' style={{ overflow: "hidden", whiteSpace: "nowrap" }}> MRf {data.manufracture}</div> */}

                      <div className='text-muted'>
                        {/* <span className='fw-bold' style={{ color: "#EF4482" }}> */}

                        {/* {data.mrp !== data.price && <h5 className='mx-2 mt-2 badge text-uppercase fw-small' style={{ backgroundColor: "#84BE52", position: "fixed" }}>{(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}%off</h5>} */}
                        {
                          data.mrp !== data.price &&
                          <div className='mb-2'>

                            <h5 className='mx-2 mt-2 text-uppercase fw-small' style={{ backgroundColor: "#fff" }}>
                              <span className='text-danger' style={{ fontSize: "0.9rem" }}> (-{(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}%)  </span>
                              {/* &nbsp; */}
                              <span className='text-dark' style={{ fontSize: "1.2rem" }}>
                                <FontAwesomeIcon icon={faIndianRupee} className="Rupee pb-2" style={{ height: "0.5rem" }} />{data.price}.00 </span>
                            </h5>

                            <div className='text-muted' style={{ fontSize: "0.7rem" }}> M.R.P:
                              <span className='px-2 text-decoration-line-through'>
                                ₹{data.mrp}
                              </span>
                            </div>
                          </div>

                        }
                        {
                          data.mrp === data.price &&
                          <div>
                            <h5>
                              {data.price}
                            </h5>
                            <div className='text-muted' style={{ fontSize: "0.6rem" }} >
                              M.R.P:
                              <span className='px-2 text-decoration-line-through'>
                                ₹{data.mrp}
                              </span>
                            </div>
                          </div>
                        }

                      </div>
                      <h6> </h6>
                    </div>

                  </Link>

                </SwiperSlide>

              )
            }

          </Swiper>
        </div>

        <div className='bg-white ms-3 me-3'>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
            }}
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Laptops/May/BAU/Hero/D45173604_IN_PC-Laptops-MAY-Samsung_1500x300._CB621451921_.jpg" alt="" className='img1 img-fluid rounded card-img-top p-2 mt-0' />
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Gateway/Ingress/Frujitsu/Fujitsu_DesktopTallHero_1500x300._CB621295611_.jpg" alt="" className='img1 img-fluid rounded card-img-top p-1' />
            </SwiperSlide>

            <SwiperSlide>
              <img src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Laptops/Smart-choice/D38878434_IN_PC_Laptops_BAU-February-Smart-choice-laptops_1500x300_3-re._CB627483699_.jpg" alt="" className='img1 img-fluid rounded card-img-top p-2' />
            </SwiperSlide>

          </Swiper>
        </div>


        <div className='bg-white ms-3 me-3'>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
            }}
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/audio/boat/330/1500x300-NM.jpg" alt="" className='img1 img-fluid rounded card-img-top p-2 mt-0' />
            </SwiperSlide>

          </Swiper>
        </div>


        {/* SLIDER - 2 */}
        <div className='bg-white '>

          <h4 className='me-auto mb-4 mt-3 headings'> Desktops </h4>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
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
              products2.map((data, key) =>

                <SwiperSlide key={key} >

                  <Link className="card cm mb-5 text-start" to={`/${data.category}/${data.id}`}>

                    <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-2 pt-2 mt-1' />
                    <div className="card-body ellipsis">
                      <small><h6 className="ct card-title  " style={{ lineHeight: "1rem", height: "3em", overflow: "hidden" }}> {data.name}  </h6> </small>
                      {/* <div className='text-muted fs-6 fst-italic' style={{ overflow: "hidden", whiteSpace: "nowrap" }}> MRf {data.manufracture}</div> */}

                      <div className='text-muted'>
                        {/* <span className='fw-bold' style={{ color: "#EF4482" }}> */}

                        {/* {data.mrp !== data.price && <h5 className='mx-2 mt-2 badge text-uppercase fw-small' style={{ backgroundColor: "#84BE52", position: "fixed" }}>{(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}%off</h5>} */}
                        {
                          data.mrp !== data.price &&
                          <div className='mb-2'>

                            <h5 className='mx-2 mt-2 text-uppercase fw-small' style={{ backgroundColor: "#fff" }}>
                              <span className='text-danger' style={{ fontSize: "0.9rem" }}> (-{(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}%)  </span>
                              &nbsp;
                              <span className='text-dark' style={{ fontSize: "1.2rem" }}>
                                <FontAwesomeIcon icon={faIndianRupee} className="Rupee pb-2" style={{ height: "0.5rem" }} />{data.price}.00 </span>
                            </h5>

                            <div className='text-muted' style={{ fontSize: "0.7rem" }}> M.R.P:
                              <span className='px-2 text-decoration-line-through'>
                                ₹{data.mrp}
                              </span>
                            </div>


                          </div>

                        }
                        {
                          data.mrp === data.price &&
                          <div>
                            <h5>
                              {data.price}
                            </h5>
                            <div className='text-muted' style={{ fontSize: "0.6rem" }} >
                              M.R.P:
                              <span className='px-2 text-decoration-line-through'>
                                ₹{data.mrp}
                              </span>
                            </div>
                          </div>
                        }

                      </div>
                      <h6> </h6>
                    </div>

                  </Link>

                </SwiperSlide>

              )
            }

          </Swiper>
        </div>


        









      </div>

    </>
  )
}

export default Electronics