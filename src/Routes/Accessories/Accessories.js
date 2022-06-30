
import React from 'react';
import axios from "axios";
import './Accessories.css'
import { Link, Routes, Route, NavLink } from 'react-router-dom'
// SLIDERS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
//-----------------------------------------
import { useEffect, useState } from "react"

import ProductObj from '../../components/ProductObj/ProductObj';

// import Row from 'react-bootstrap/Row'
// import CardObj from '../components/Product';

function Accessories() {

    let [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/Accessories")
            let userList = response.data
            setUsers(userList)
        }
        fetchUsers()
    }, [])

    return (
        <>
            {/* <div className='container border mt-5'>
                <ProductObj products={users} />
            </div> */}

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
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >

                
                    {
                        users.map((data, key) =>
                            <SwiperSlide key={key} >
                                <NavLink className="card cd" to="covid">
                                    <img src={data.image} alt="" className='img img-fluid img-fluid pt-2 p-1 rounded card-img-top' />
                                    <div className="card-body">
                                        <h6 className="ct card-title ">Covid Essentials</h6>
                                    </div>
                                </NavLink>

                            </SwiperSlide>
                        )
                    }

               
                {/* <SwiperSlide>
                    <NavLink className="card cd" to="ayush">
                        <img src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg" alt="" className='img pt-2 p-1 imimg-fluid g-center rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Ayush</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="mom-baby">
                        <img src="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_1.jpg" alt="" className='img img-fluid pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Mom & Baby</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="devices">
                        <img src="https://www.netmeds.com/images/category/665/thumb/devices_1.jpg" alt="" className='img img-fluid pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Devices</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="fitness">
                        <img src="https://www.netmeds.com/images/category/500/thumb/fitness_1.jpg" alt="" className='img img-fluid pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Fitness</h6>
                        </div>
                    </NavLink>
                </SwiperSlide> */}

            </Swiper>


        </>
    );
}
export default Accessories;