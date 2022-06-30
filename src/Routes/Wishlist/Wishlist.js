
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

    return (
        <>

            {/* <div className='container border mt-4'>
                <h4 className='me-auto '> Shopping List </h4>
                <hr className='ms-2 me-2'></hr>
                <ProductObj products={products} />
            </div> */}

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