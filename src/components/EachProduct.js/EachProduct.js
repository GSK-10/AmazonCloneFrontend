import axios from 'axios';
import React from 'react';
import './EachProduct.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Link, Routes, Route, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

import offers from '../../Images/offers.png'


function EachProduct() {

    let navigate = useNavigate();
    const { name, id } = useParams();
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        let response = await axios.get(`http://localhost:8090/${name}/${id}`);
        // console.log(response)
        let productList = response.data;
        setProduct(productList);
        // console.log(productList)
    }

    useEffect(() => {
        getProduct();
    }, [])

    const updateQuantity = async (data) => {
        console.log(data)
        let response = await axios.get(`http://localhost:8090/Cart/${data.id}`);
        let updatedQty = response.data.qty
        let response1 = await axios.put(`http://localhost:8090/Cart/${data.id}`, { ...response.data, qty: updatedQty + 1 })
        console.log(updatedQty + 1);
        navigate("/Cart");
    }

    const sendCartItemsToUsersAccount = async () => {
        let currentUser = await axios.get("http://localhost:8090/CurrentLoggedInUser")
        let cartItems = await axios.get("http://localhost:8090/Cart");
        let userData = { ...currentUser.data[0], cart: [...cartItems.data] };
        let postdata = await axios.put(`http://localhost:8090/Users/${currentUser.data[0].id}`, userData);
    }

    const postData = async (data) => {
        data.qty = 1;
        await axios.post(`http://localhost:8090/Cart`, data)
        sendCartItemsToUsersAccount();
        navigate("/Cart");
        console.log("post : ", data)
        window.location.reload()
    }

    const getData = async (data) => {

        let currentUser = await axios.get("http://localhost:8090/CurrentLoggedInUser")

        if (currentUser.data.length === 0) {
            navigate('/LoginUser')
            console.log(currentUser.data.length);
        }
        else {
            let found = false;
            let response = await axios.get(`http://localhost:8090/Cart`);

            // let cartItems = response.data;
            response.data.forEach((element) => {
                if (element.id === data.id) {
                    updateQuantity(data);
                    found = true;
                }
            })
            if (found === false)
                postData(data);

            navigate("/Cart");
            window.location.reload()
        }


    }


    return (
        <>

            {/* <h3>EachProduct</h3> */}

            <div className='container mt-4'>

                {
                    isNaN(product.id) == true &&
                    <div>
                        <h5> user account </h5>
                    </div>
                }

                {
                    isNaN(product.id) == false &&
                    <div>

                        <div className="row mb-5 m-4 mt-2">

                            {product.name === "undefined" && <p className="text-warning">Product Loading... </p>}
                            <div className="col-lg-6 col-md-6 col-sm-12 text-center p-3 part1">
                                <img className='rounded w-75 text-center' src={product.img} alt={product.name} />
                            </div>


                            <div className="col-sm-12 col-md-6 col-lg-6 p-3">
                                <p className="ct" style={{ fontSize: "1.4rem", fontWeight: "500" }}> {product.name} </p>
                                <hr />

                                <div className='text-muted mb-0'>
                                    {/* <span className='fw-bold' style={{ color: "#EF4482" }}> */}

                                    {/* {data.mrp !== data.price && <h5 className='mx-2 mt-2 badge text-uppercase fw-small' style={{ backgroundColor: "#84BE52", position: "fixed" }}>{(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}%off</h5>} */}
                                    {
                                        product.mrp !== product.price &&
                                        <div className='mb-0'>

                                            <h5 className='mx-2 mt-2 text-uppercase fw-small' style={{ backgroundColor: "#fff" }}>
                                                <span className='text-danger' style={{ fontSize: "1.4rem" }}> (-{(((product.mrp - product.price) / product.mrp) * 100).toPrecision(2)}%)  </span>
                                                {/* &nbsp; */}
                                                <span className='text-dark' style={{ fontSize: "1.6rem" }}>
                                                    <FontAwesomeIcon icon={faIndianRupee} className="Rupee pb-2" style={{ height: "0.7rem" }} />{product.price}.00 </span>
                                            </h5>

                                            <div className='text-muted ms-2' style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                                                M.R.P:
                                                <span className='px-2 text-decoration-line-through'>
                                                    ₹{product.mrp}.00
                                                </span>

                                            </div>
                                        </div>

                                    }
                                    {
                                        product.mrp === product.price &&
                                        <div className='mb-0'>
                                            <h5>
                                                {product.price}
                                            </h5>
                                            <div className='text-muted' style={{ fontSize: "0.6rem" }} >
                                                M.R.P:
                                                <span className='px-2 text-decoration-line-through'>
                                                    ₹{product.mrp}
                                                </span>
                                            </div>
                                        </div>
                                    }

                                </div>

                                <div class="mt-0 pt-0 mb-0">
                                    <img class="mt-0 pt-0 mb-0" style={{ height: "28px", width: "60px" }} src="https://i0.wp.com/thestronghomemaker.com/wp-content/uploads/2022/06/amazon-prime-delivery-checkmark._CB659998231_.png?resize=621%2C260&ssl=1" />
                                </div>

                                <div className='mt-1 text-muted'>
                                    <div className='fst-italic'> <small> &nbsp; Inclusive of all taxes </small> </div>
                                    <div className='mb-2'> <small> &nbsp; No Cost EMI available </small>  </div>

                                    <div className='text-center mt-4' style={{ fontSize: "1rem" }}>
                                        <button className="btn w-75 text-center p-1" onClick={() => getData(product)} style={{ backgroundColor: "#ffd814", color: "black", borderRadius: "25px", fontSize: "1rem" }}> Add To Cart </button>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div>
                            <div className='mt-3'>
                                <p className='text h5 mb-1'>
                                    <span>
                                        <img className='' style={{ height: "25px", width: "25px" }} src={offers} />
                                    </span> Offers
                                </p>

                                <div className='card-group m-2 mt-1'>
                                    <div className='p-2 shadow card m-2 pb-0 rounded'>
                                        <h6> Bank offers </h6>
                                        <small className='text-start' style={{ fontSize: "0.7rem" }}>
                                            <p>
                                                Upto ₹1,750.00 discount on select Credit Cards, Citi Debit Cards
                                            </p>
                                            <p className='' style={{ cursor: "pointer" }}>
                                                See more
                                            </p>
                                        </small>
                                    </div>


                                    <div className='p-2 shadow card m-2 rounded'>
                                        <h6> No Cost EMI </h6>
                                        <small className='text-start' style={{ fontSize: "0.7rem" }}>
                                            <p>
                                                Upto ₹3,362.90 EMI interest savings on Amazon Pay ICICI Bank Credit Cards
                                            </p>
                                            <p>
                                                See more
                                            </p>
                                        </small>
                                    </div>

                                    <div className='p-2 shadow card m-2 rounded'>
                                        <h6> Buy more Save more </h6>
                                        <small className='text-start' style={{ fontSize: "0.7rem" }}>
                                            <p>
                                                Get ₹30.00 back for every eligible item purchased with this item
                                                {/* <br /> */}
                                            </p>
                                            <p>
                                                See more
                                            </p>
                                        </small>
                                    </div>
                                    <div className='p-2 shadow card m-2 rounded'>
                                        <h6> Partner offers </h6>
                                        <small className='text-start' style={{ fontSize: "0.7rem" }}>
                                            <p>
                                                Get GST invoice and save up to 28% on business purchases. sign up for free
                                            </p>
                                            <p>
                                                See more
                                            </p>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }



            </div>

        </>

    )
}

export default EachProduct