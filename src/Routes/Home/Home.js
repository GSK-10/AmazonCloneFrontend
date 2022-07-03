
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
import Aos from "aos";
import "aos/dist/aos.css";


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

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    const [usercart, setCart] = useState([]);

    useEffect(() => {
        fetchCartItems()
    }, [])



    const loop = async (product) => {
        console.log(product)
        await axios.post("http://localhost:8090/Cart", product);
    }

    const post = async (data) => {
        let currentUser = await axios.get("http://localhost:8090/CurrentLoggedInUser")
        console.log(data)

        // let data2 = data;

        data.map((product) => {
            loop(product);
        })
        // console.log(Cart.data)
    }


    const postData1 = async (Data) => {

        let cartItems = Data[0].cart;
        console.log(cartItems.length)

        if (cartItems.length > 0) {
            post(cartItems);
        }
    }


    const postDataToCart = async () => {
        let currentUser = await axios.get("http://localhost:8090/CurrentLoggedInUser")
        let Data = currentUser.data;
        postData1(Data)
    }


    const fetchCartItems = async () => {
        let response1 = await axios.get("http://localhost:8090/CurrentLoggedInUser")
        let Data = response1.data;
        // console.log(Data)

        if (Data[0].cart.length > 0) {
            postDataToCart();
            // postData();
        }
        // sendCartItemsToUsersAccount();
    }







    return (

        <div className='home'>

            <div className='Carousel'>
                <ControlledCarousel />
            </div>

            <div className='display me-3 ms-3 mb-5'>

                {/* slider - 1 */}
                <div data-aos="fade-up" className='bg-white'>

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


                <div data-aos="fade-up" className='bg-white' style={{ backgroundColor: "" }}>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "black",
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-5"
                    >
                        <SwiperSlide>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Laptops/May/BAU/Hero/D45173604_IN_PC-Laptops-MAY-Samsung_1500x300._CB621451921_.jpg" alt="" className='img1 img-fluid rounded card-img-top p-4' />
                        </SwiperSlide>

                    </Swiper>
                </div>


                {/* slider - 2 */}
                <div data-aos="fade-up" className='bg-white '>

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


                <div data-aos="fade-up" className='bg-white' style={{ backgroundColor: "" }}>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "black",
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-5"
                    >
                        <SwiperSlide>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/MFS_July26/afpage/topbanners/3._SX3000_QL85_.jpg" alt="" className='img1 img-fluid rounded card-img-top p-4' />
                        </SwiperSlide>

                    </Swiper>
                </div>

                {/* slider - 3 */}
                <div data-aos="fade-up" className='bg-white '>

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

                <div data-aos="fade-up" className='bg-white mt-0' style={{ backgroundColor: "" }}>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "black",
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-5"
                    >
                        <SwiperSlide>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1500x350._CB409247456_.gif" alt="" className='img1 img-fluid rounded card-img-top p-4' />
                        </SwiperSlide>

                    </Swiper>
                </div>


                {/* slider - 4 */}
                <div data-aos="fade-up" className='bg-white '>

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
                <div data-aos="fade-up" className='bg-white '>

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
                <div data-aos="fade-up" className='bg-white '>

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