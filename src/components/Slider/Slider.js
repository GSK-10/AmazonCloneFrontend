
import React from 'react'
import Item from '../Item/Item'
//-----------------------------------------------------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
//-----------------------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import './Slider.css'

function Slider(products) {
    return (
        <>
            {/* <Swiper
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
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >
                {
                    products.map((data, key) =>
                        <SwiperSlide key={key} >
                            <NavLink className="card cd" to="/Item">
                                <img src={data.image} alt="" className='img img-fluid img-fluid pt-2 p-1 rounded card-img-top' />
                                <div className="card-body">
                                    <h6 className="ct card-title "> {data.description}</h6>
                                </div>
                                <p> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon>
                                 {data.price}.00 </p>
                            </NavLink>

                        </SwiperSlide>
                    )
                }

            </Swiper> */}

            <Link to="/Item"> add </Link>
            


        </>
    )
}

export default Slider