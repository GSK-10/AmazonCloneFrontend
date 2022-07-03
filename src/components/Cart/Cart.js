import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';


function Cart() {


  let navigate = useNavigate();
  const [usercart, setCart] = useState([]);
  let [totalMRP, setTotalMRP] = useState(0);
  let [totalDiscount, setTotalDiscount] = useState(0);


  


  // const post = async (data) => {
  //   let currentUser = await axios.get("http://localhost:8090/CurrentLoggedInUser")
  //   console.log(data)
  //   console.log(currentUser.data[0].cart)

  //   await axios.put(`http://localhost:8090/cart/${currentUser.data[0].id}`, data);
  // }
  const loop = async(product) => {
    await axios.post(`http://localhost:8090/Cart/${product.id}`, product );
  }

  const post = async (data) => {
    let currentUser = await axios.get("http://localhost:8090/CurrentLoggedInUser")
    console.log(data)

    data.map( (product, key)=>{
      loop(product);
    })
    
    // console.log(Cart.data)
  }


  const postData = async (Data) => {

    // let currentUser = await axios.get("http://localhost:8090/CurrentLoggedInUser")
    // let cartItems = currentUser.data[0].cart;
    let cartItems = Data[0].cart;
    // console.log(cartItems.length)
    if (cartItems.length > 0) {
      // let response = await axios.post("http://localhost:8090/cart", {...currentUser.data[0].cart});\
      // console.log("hello") 
      post(cartItems);
      // console.log(cartItems)
      // await axios.post("http://localhost:8090/cart", currentUser.data[0].cart);
    }
  }


  const postDataToCart = async () => {
    let currentUser = await axios.get("http://localhost:8090/CurrentLoggedInUser")
    let Data = currentUser.data;
    postData(Data)
  }



  const fetchCartItems = async () => {
    let response1 = await axios.get("http://localhost:8090/CurrentLoggedInUser")
    let Data = response1.data;
    // console.log(Data)
    
    if (Data.length > 0) {
      postDataToCart();
      // postData();
    }
    // loggedInUser();

    let response = await axios.get("http://localhost:8090/Cart");
    let cartItems = response.data;
    setCart(cartItems)

    response.data.map(data => totalMRP = totalMRP + ((+data.mrp) * (+data.qty)))
    response.data.map(data => totalDiscount = totalDiscount + (data.price - data.mrp) * data.qty)
    setTotalMRP(totalMRP);
    setTotalDiscount(-totalDiscount);

    // sendCartItemsToUsersAccount();
  }

  

  const deleteItem = async (data) => {
    await axios.delete(`http://localhost:8090/Cart/${data.id}`);
    window.location.reload();
    // sendCartItemsToUsersAccount(data);
  }

  useEffect(() => {
    fetchCartItems();
  }, [])

  const changeRoute = () => {
    navigate("/");
  }


  return (


    <div className='container'>


      {
        usercart.length === 0 &&

        <div className='container mt-5'>

          <div className='header mt-4 me-auto me-2'>

            <div className="row mb-5 m-4 mt-2">

              <div className="col-lg-6 col-md-6 col-sm-12 text-center p-3 part1">
                <img className='rounded w-100 text-center' src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" />
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 p-3">
                <h2> Your Amazon Cart is empty </h2>
                <div className='text-center mt-4' style={{ fontSize: "1rem" }}>
                  <button className="btn w-75 text-center p-1" onClick={changeRoute} style={{ backgroundColor: "#ffd814", color: "black", borderRadius: "8px", fontSize: "1rem" }}> Continue Shopping </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      }



      {
        usercart.length !== 0 &&
        <div>

          <div className='header mt-5 me-auto m-1'>

            <div className="row mb-5 mt-2">

              <h2> Shopping Cart </h2>
              <hr />

              <div className="col-lg-9 col-md-12 col-sm-12 text-center p-3 part1">
                {
                  usercart.map((data, key) =>

                    <div key={key} className='row p-3' >

                      <div className='col-lg-3 col-md-3 col-sm-12'>
                        <img className='img-fluid w-100' src={data.img} alt="" />
                      </div>

                      <div className='col-lg-7 col-md-8 col-sm-10 card-title text-start' style={{ overflow: "hidden" }}>

                        <p className='h6 text-start mb-0' style={{ overflow: "hidden" }} > {data.name} </p>
                        <small> <p className='text-start mt-0 mb-0' style={{ color: "green", fontSize: "0.8rem" }}> In stock </p> </small>
                        <p className='mt-0 text-muted text-start mb-0' style={{ fontSize: "0.8rem" }}> Eligible for FREE shipping </p>

                        <div class="mt-0 pt-0 mb-0">
                          <img class="mt-0 pt-0 mb-0" style={{ height: "28px", width: "60px" }} src="https://i0.wp.com/thestronghomemaker.com/wp-content/uploads/2022/06/amazon-prime-delivery-checkmark._CB659998231_.png?resize=621%2C260&ssl=1" />
                        </div>

                        <div> Qty:&nbsp;{data.qty} |
                          <button className="btn" onClick={() => deleteItem(data)} style={{ backgroundColor: "#fff" }}> Delete </button>
                        </div>

                      </div>

                      <div className='col-lg-2 col-md-1 col-sm-2'>
                        <h6 className='text-muted' style={{ fontSize: "0.9rem" }}> Price </h6>
                        <h5 className='mx-2 mt-2 text-uppercase fw-small' style={{ backgroundColor: "#fff" }}>
                          {/* &nbsp; */}
                          <span className='text-dark' style={{ fontSize: "1.2rem" }}>
                            <FontAwesomeIcon icon={faIndianRupee} className="Rupee pb-2" style={{ height: "0.5rem" }} />{data.price}.00 </span>
                        </h5>

                      </div>

                      <hr />
                    </div>
                  )
                }
              </div>


              <div className="col-sm-12 col-md-12 col-lg-3 p-3 border">

                {
                  usercart.length == 1 &&
                  <div>
                    <h4 className='' style={{ fontSize: "1.2rem" }}>
                      Subtotal (1 item):&nbsp;
                      <FontAwesomeIcon icon={faIndianRupee} className="Rupee pb-2" style={{ height: "0.5rem" }} />
                      {((totalMRP - totalDiscount)).toFixed(2)}
                    </h4>
                  </div>
                }
                {
                  usercart.length > 1 &&
                  <div>
                    <h4 className='' style={{ fontSize: "1.2rem" }}>
                      Subtotal ({usercart.length } items): &nbsp;
                      <br/> 
                      <FontAwesomeIcon icon={faIndianRupee} className="Rupee pb-2" style={{ height: "0.5rem" }} />
                      {((totalMRP - totalDiscount)).toFixed(2)}
                    </h4>
                  </div>
                }



                <div className='text-center mt-4' style={{ fontSize: "1rem" }}>
                  <button className="btn w-100 text-center p-1" onClick={changeRoute} style={{ backgroundColor: "#ffd814", color: "black", borderRadius: "8px", fontSize: "1rem" }}> Proceed to Buy </button>
                </div>
              </div>





            </div>

          </div>

        </div>
      }
    </div>
  )
}

export default Cart