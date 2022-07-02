import axios from 'axios';
import React from 'react';
import './EachProduct.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function EachProduct() {

    let navigate = useNavigate();
    const { name, id } = useParams();
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        let response = await axios.get(`http://localhost:8090/${name}/${id}`);
        console.log(response)
        let productList = response.data;
        setProduct(productList);
        console.log(productList)
    }

    useEffect(() => {
        getProduct();
    }, [])

    const updateQuantity = async (data) => {
        console.log(data)
        let response = await axios.get(`http://localhost:8090/Cart/${data.id}`);
        let updatedQty = response.data.qty
        let response1 = await axios.put(`http://localhost:8090/Cart/${data.id}`, { ...response.data, qty: updatedQty + 1 })
        navigate("/cart");
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
        navigate("/cart");
        console.log("post : ", data)
        window.location.reload()
    }

    const getData = async (data) => {
        let found = false;
        let response = await axios.get(`http://localhost:8090/Cart`);
        // let cartItems = response.data;
        response.data.forEach((element) => {
            if (element.id === data.id) {
                updateQuantity(data);
                found = true;
                // break;
            }
        })
        if (found === false)
            postData(data);

        navigate("/cart");
        window.location.reload()
    }


    return (
        <>

            <h3>EachProduct</h3>

            <div className='container'>
            <div className="row mb-5">
                {product.name === "undefined" && <p className="text-warning">Product Loading</p>}
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className='img-fluid rounded w-50' src={product.img} alt={product.name} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className='text h5'>{product.name}</p>
                    <hr />
                    <div className='h6'>Best Price* <span className='h5 ' style={{ color: "#EF4281" }}>₹ {product.price}</span> </div>
                    <div>Mrp:
                        <span className='text-decoration-line-through'>
                            ₹ {product.mrp}
                        </span>
                        {product.mrp !== product.price && <span className='mx-2 text-uppercase fw-bold h6' style={{ color: "#45923F" }}>get {(((product.mrp - product.price) / product.mrp) * 100).toPrecision(2)}% off</span>}
                        <div className='mt-1 text-muted'>(Inclusive of all taxes)</div>
                    </div>
                    <div className='mt-1 text-muted'>
                        <div className='fst-italic'>* Mkt: {product.manufracture}</div>
                        <div>* Origin: {product.origin}</div>
                        <div className='fst-italic'>* Delivery charges if applicable will be applied at checkout</div>
                    </div>
                    <div>
                        <button onClick={() => getData(product)} className="mt-1 btn fw-bold text-uppercase" style={{ backgroundColor: "#24AEB1", color: "white" }}>Add To Cart</button>
                    </div>
                    <div className='mt-5'>
                        <p className='text-muted h5 text-uppercase mb-3'>Offers Applicable</p>
                        <div className='row w-100' style={{ backgroundColor: "#F3F3F3" }}>
                            <div className='col-2 mt-3 '>
                                <img className='img-thumbnail rounded mb-3' style={{ width: "50px" }} src="https://www.netmeds.com/assets/version1653998784/gloryweb/images/icons/offer_blue_outline.svg" alt="" />
                            </div>
                            <div className="col-7 mt-3">
                                <p className='h6'>Default Discount</p>
                                <p className='h6' style={{ color: "#45923F" }}>You get {(((product.mrp - product.price) / product.mrp) * 100).toPrecision(2)}% OFF on this product</p>
                            </div>
                            <span className='col-3 mt-3' style={{ color: "#EF4281" }}>Offer Applied</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        </>

    )
}

export default EachProduct