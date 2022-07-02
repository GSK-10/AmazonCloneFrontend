
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react"
//-------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
//-------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import ProductObj from '../../components/ProductObj/ProductObj';
// import Slider from '../../components/Slider/Slider';
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import Item from '../../components/Item/Item'
import './Wishlist.css'


function Wishlist() {

    let [products, setProducts] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/WishLists?category=shoppingList")
            let productList = response.data
            setProducts(productList)
        }
        fetchUsers()
    }, [])

    let [products1, setProducts1] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/WishLists?category=Interest")
            let productList1 = response.data
            setProducts1(productList1)
        }
        fetchUsers()
    }, [])

    console.log(products)
    console.log(products1)

    const getData = async(data) => {

    }

    return (
        <>

            {/* <div className='container border mt-4'>
                <h4 className='me-auto '> Shopping List </h4>
                <hr className='ms-2 me-2'></hr>
                <ProductObj products={products} />
            </div> */}
            <div className='me-3 ms-3 mb-5 p-0'>

                <h3 className='mt-4 ms-4'> Wishlist </h3>


                {/* <div className='bg-white ms-3 me-3'>
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
                </div> */}

                {/* SLIDER - 1 */}
                <div className='bg-white'>

                    <h4 className='me-auto mb-4 mt-3 headings'> Shopping List </h4>
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

                                    <Link className="cw mb-5 text-start" to={`/${data.category}/${data.id}`} >

                                        <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-2 pt-2 mt-1' />
                                        <div className="card-body ellipsis">
                                            <small><h6 className="ct card-title  " style={{ lineHeight: "1rem", height: "3em", overflow: "hidden" }}> {data.name}  </h6> </small>
                                            {/* <div className='text-muted fs-6 fst-italic' style={{ overflow: "hidden", whiteSpace: "nowrap" }}> MRf {data.manufracture}</div> */}

                                            <div className='text-muted mt-0'>
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
                                                        <div className='text-center' style={{ fontSize:"0.8rem"}}>
                                                            <button className="btn w-75 text-center p-1" onClick={() => getData(data)} style={{ backgroundColor: "#ffd814", color: "black", borderRadius: "25px", fontSize:"0.8rem" }}> Add To Cart </button>
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
                                                            <span>
                                                            <button className="mt-1 btn" onClick={() => getData(data)} style={{ backgroundColor: "#ffd814", color: "Black" }}>Add To Cart</button>
                                                            </span>
                                                        </div>
                                                       
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                    </Link>

                                </SwiperSlide>

                            )
                        }

                    </Swiper>
                </div>
            </div>



                <div className='container border mt-5'>
                    <h4 className='me-auto mb-4'> Gadgets </h4>
                    <hr className='ms-2 me-2'></hr>
                    {/* <Slider products={products1} /> */}
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "black",
                        }}
                        className="mySwiper mx-2 mr-2 mb-5"
                        slidesPerView={1}
                        spaceBetween={9}
                        navigation={true}
                        modules={[Navigation]}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {
                            products1.map((data, key) =>
                                <SwiperSlide key={key} >
                                    <Link className="card cd" to="/Item">
                                        <img src={data.img} alt="" className='img img-fluid pt-2 p-1 rounded card-img-top images' />
                                        <div className="card-body">
                                            <h6 className="ct card-title "> {data.description}</h6>
                                            <p> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon>
                                                {data.price}.00 </p>
                                        </div>
                                    </Link>

                                </SwiperSlide>
                            )
                        }

                    </Swiper>

                </div>


                <div className='bg-white '>

                    <h4 className='me-auto mb-4 mt-3 headings'> Fashion </h4>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "white",
                        }}
                        className="mySwiper mx-2 mb-5 ps-3 pe-3"
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {
                            products1.map((data, key) =>

                                <SwiperSlide key={key} >

                                    <Link className="card cd mb-5" to="/Fashion">

                                        <img src={data.img} alt="" className='img img-fluid img-fluid rounded card-img-top p-4' />
                                        {/* <div className="card-body ">
                                            <p className='pb-2'> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon>
                                                {data.price}.00 </p>
                                            <h6 className="ct card-title "> </h6>

                                        </div> */}


                                    </Link>

                                </SwiperSlide>

                            )
                        }

                    </Swiper>
                </div>

                <Routes>
                    <Route path="/Item" element={<Item />} />
                </Routes>

            </>
            )
}

            export default Wishlist