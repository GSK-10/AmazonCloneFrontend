
import React from 'react';
import ControlledCarousel from '../../components/Carousel/Carousel';
import axios from "axios";
import { useEffect, useState } from "react"
import Display from "../../components/Display/Display";
//-------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
//-------------------------------------------------
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import ProductObj from '../../components/ProductObj/ProductObj';
// import Slider from '../../components/Slider/Slider';
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import Item from '../../components/Item/Item'
import '../../Routes/Wishlist/Wishlist.css'

import smallicon1 from '../../Images/small_image1.jpg'



// import Header from '../../components/Header/Header';


function Home() {

    let [products1, setProducts1] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/Display?category=Electronics")
            let productList1 = response.data
            setProducts1(productList1)
            console.log(productList1)
        }
        fetchUsers()
    }, [])

    let [products2, setProducts2] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/Display?category=Fashion")
            let productList2 = response.data
            setProducts2(productList2)
            console.log(productList2)
        }
        fetchUsers()
    }, [])


    let [products3, setProducts3] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/Display?category=Kitchen")
            let productList3 = response.data
            setProducts3(productList3)
            console.log(productList3)
        }
        fetchUsers()
    }, [])


    let [products4, setProducts4] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/Display?category=BeautyHealth")
            let productList4 = response.data
            setProducts4(productList4)
            console.log(productList4)
        }
        fetchUsers()
    }, [])


    let [products5, setProducts5] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/Display?category=SportsFitnessOutdoor")
            let productList5 = response.data
            setProducts5(productList5)
            console.log(productList5)
        }
        fetchUsers()
    }, [])


    let [products6, setProducts6] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/Display?category=Music")
            let productList6 = response.data
            setProducts6(productList6)
            console.log(productList6)
        }
        fetchUsers()
    }, [])







    return (

        <div className='home'>

            <div className='Carousel'>
                <ControlledCarousel />
            </div>

            <div className='display me-3 ms-3 mb-5'>

                {/* slider - 1 */}
                <div className='bg-white '>

                    <h4 className='me-auto mb-4 mt-3 headings'> Electronics </h4>
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

                                <SwiperSlide key={key}>

                                    <Link className="cd mb-5" to="/Electronics">

                                        <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-1 pt-2 mt-2' />
                                        {/* <div className="card-body ">
                                            <p className='pb-2'> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon>
                                                {data.price}.00 </p>
                                            <h6 className="ct card-title "> </h6>

                                        </div> */}
                                        <h6 className='mt-2'> {data.name}</h6>

                                    </Link>

                                </SwiperSlide>

                            )
                        }

                    </Swiper>
                </div>

                {/* slider - 2 */}
                <div className='bg-white '>

                    <h4 className='me-auto mb-4 mt-3 headings'> Fashion </h4>
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

                                    <Link className="cd mb-5" to="/Fashion">

                                        <img src={data.img} alt="" className='img img-fluid rounded card-img-top p-4 mt-2 pb-0 pt-2' />
                                        {/* <div className="card-body ">
                                            <p className='pb-2'> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon>
                                                {data.price}.00 </p>
                                            <h6 className="ct card-title "> </h6>

                                        </div> */}
                                        <h6 className='mt-2'> {data.name}</h6>
                                        {/* <h6> Shop now </h6> */}

                                    </Link>

                                </SwiperSlide>

                            )
                        }

                    </Swiper>
                </div>



                <div className='' style={{ backgroundColor:"#eaeded !important"}}>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/EOSS/AFpage/afscrolls/hindi/pc/4_2._SX3000_QL85_.jpg" alt="" className='img1 img-fluid rounded card-img-top p-4' />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/EOSS/AFpage/afscrolls/hindi/pc/4_2._SX3000_QL85_.jpg" alt="" className='img1 img-fluid rounded card-img-top p-4' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/EOSS/AFpage/afscrolls/hindi/pc/4_2._SX3000_QL85_.jpg" alt="" className='img1 img-fluid rounded card-img-top p-4' />
                        </SwiperSlide> */}
                    </Swiper>
                </div>



                {/* slider - 3 */}
                <div className='bg-white '>

                    <h4 className='me-auto mb-4 mt-3 headings'> Home and Kitchen </h4>
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
                            products3.map((data, key) =>

                                <SwiperSlide key={key} >

                                    <Link className="cd mb-5" to="/Kitchen">

                                        <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-2 pt-2 mt-3' />
                                        {/* <div className="card-body ">
                        <p className='pb-2'> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon>
                            {data.price}.00 </p>
                        <h6 className="ct card-title "> </h6>

                    </div> */}
                                        {/* <h6> {data.name}</h6> */}
                                        <h6> Shop now </h6>

                                    </Link>

                                </SwiperSlide>

                            )
                        }

                    </Swiper>
                </div>


                {/* slider - 4 */}
                <div className='bg-white '>

                    <h4 className='me-auto mb-4 mt-3 headings'> Beauty and Health </h4>
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
                            products4.map((data, key) =>

                                <SwiperSlide key={key} >

                                    <Link className="cd mb-5" to="/BeautyHealth">

                                        <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-0 pt-2 mt-3' />
                                        <h6 className='mt-2'> {data.name}</h6>

                                    </Link>

                                </SwiperSlide>

                            )
                        }

                    </Swiper>
                </div>


                {/* slider - 5 */}
                <div className='bg-white '>

                    <h4 className='me-auto mb-4 mt-3 headings'> Sports, Fitness & Outdoor </h4>
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
                            products5.map((data, key) =>

                                <SwiperSlide key={key} >

                                    <Link className="cd mb-5" to="/Sports">

                                        <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-2 pt-2 mt-3' />
                                        <h6> Shop now </h6>

                                    </Link>

                                </SwiperSlide>

                            )
                        }

                    </Swiper>
                </div>



                {/* slider - 6 */}
                <div className='bg-white '>

                    <h4 className='me-auto mb-4 mt-3 headings'> Music </h4>
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
                            products6.map((data, key) =>

                                <SwiperSlide key={key} >

                                    <Link className="cd mb-5" to="/MoviesMusicGames">

                                        <img src={data.img} alt="" className='img img-fluid img-fluid rounded p-4 pb-2 pt-2 mt-3' />
                                        <h6> {data.name}</h6>

                                    </Link>

                                </SwiperSlide>

                            )
                        }

                    </Swiper>
                </div>

            </div>

        </div>
    );
}
export default Home;