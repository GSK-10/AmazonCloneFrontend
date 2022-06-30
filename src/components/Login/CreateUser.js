import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router';
import { Link, Routes, Route, NavLink } from 'react-router-dom'

import Swal from 'sweetalert2';


function CreateUser() {

  var para = document.getElementById("para");
  para = "Hello"
  const navigate = useNavigate();
  const [found, setFound] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm()

  const postData = async (data) => {
    let response = await axios.post("http://localhost:8090/Users", { ...data, cart: [] });
    
    Swal.fire({
      title: '',
      text: 'Account Created',
      icon: 'success',
      confirmButtonText: 'Okay',
      timer: 4000
    })
    
    setTimeout(()=>{
      navigate("/LoginUser");
    }, 2000)
    
   
    // console.log(response.data)
  }

  const validateUser = async (data) => {
    let found = false;
    let response = await axios.get("http://localhost:8090/Users");

    response.data.map((element) => {
      if (element.email === data.email || element.phoneno === data.phoneno) {
        found = true;
        setFound(true);
      }

    })
    if (found !== true) {
      postData(data)
    }
    else {
      Swal.fire({
        title: '',
        text: 'User Already Exists',
        icon: 'warning',
        confirmButtonText: 'Okay',
        timer: 4000
      })
    }

  }

  const onFormSubmit = async (data) => {
    // console.log(data)
    let response = await axios.get("http://localhost:8090/CurrentLoggedInUser");

    if (response.data.length === 1) {
        // Swal.fire({
        //   title: '',
        //   text: 'Already Logged In',
        //   icon: 'warning',
        //   confirmButtonText: 'Close',
        //   html:
        //    '<div className="btn bg-white p-1" onClick={Moveto} style={{ fontSize: "0.8rem", color: "blue" }}> Move to Home </div>'
        // })
        Swal.fire({
          title: '',
          text: 'Already Logged In',
          icon: 'warning',
          confirmButtonText: 'Move to HomePage',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            navigate("/");
          } else if (result.isDenied) {
            navigate("/");
          }
        })
    }
    else {
      validateUser(data)
    }
  }

  function Moveto() {
    navigate('/LoginUser')
  }


  return (
    <div>
      <div className='container'>
        <div className='col-md-6 col-lg-6 col-sm-12 m-5 mt-4 mb-2 shadow rounded p-4 pb-2  part1'>
          <h2 classname="me-auto mb-3 pb-3"> Create Account  </h2>
          <br />

          <form onSubmit={handleSubmit(onFormSubmit)} className='text-center'>

            <div class="mb-3 p-0">
              <span>
                <small> <p className='me-auto mb-1 ms-1' style={{ "textAlign": "start", fontSize: "0.8rem" }}> <b>Your Name </b></p> </small>
              </span>
              <span> <input type="text" id="name" style={{ height: "2rem" }} placeholder='First and Last Name' class="form-control" aria-describedby="emailHelp" {...register("name", { required: "true" })} /> </span>
              <error>
              {errors.name?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" , fontSize: "0.8rem"}}> * Enter your Name</span>}
              </error>
            </div>

            <div class="mb-3 p-0">
              <span>
                <small> <p className='me-auto mb-1 ms-1' style={{ "textAlign": "start", fontSize: "0.8rem" }}> <b> Mobile Number </b></p> </small>
              </span>
              {/* <label className='' style={{ fontSize: "0.8rem" }}> <b> Mobile Number </b>  </label> */}
              <span> <input type="phoneno" id="phoneNo" placeholder='Mobile Number' style={{ height: "2rem" }} class="form-control" {...register("phoneno", { required: "true", minLength: 10 })} /> </span>
              <error>
              {errors.phoneno?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340", fontSize: "0.8rem" }}> * Enter your Phone No.</span>}
              </error>
            </div>

            <div class="mb-3 p-0">
              <span>
                <small> <p className='me-auto mb-1 ms-1' style={{ "textAlign": "start", fontSize: "0.8rem" }}> <b> Email </b></p> </small>
              </span>
              <span> <input type="email" id="email" style={{ height: "2rem" }} class="form-control" aria-describedby="emailHelp" {...register("email", { required: "true" })} /> </span>
              <error>
                {errors.email?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" , fontSize: "0.8rem"}}> * Enter your Email </span>}
              </error>
            </div>


            <div class="mb-3 p-0">
              <span>
                <small> <p className='me-auto mb-1 ms-1' style={{ "textAlign": "start", fontSize: "0.8rem" }}> <b> Username </b></p> </small>
              </span>
              <span> <input type="text" id="username" style={{ height: "2rem" }} placeholder='Atleast 4 characters' class="form-control" aria-describedby="emailHelp" {...register("username", { required: "true", minLength: 4, maxLength: 10 }) }/> </span>
              <error>
              {errors.username?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" , fontSize: "0.8rem"}} > * Enter your UserName</span>}
              {errors.username?.type === "minLength" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340", fontSize: "0.8rem" }}> * Minimum of 4 characters </span>}              
              </error>
            </div>


            <div class="mb-3">
              <span>
                <small> <p className='me-auto mb-1 ms-1' style={{ "textAlign": "start", fontSize: "0.8rem" }}> <b> Password </b></p> </small>
              </span>
              <input type="password" id="password" placeholder='Atleast 6 characters' style={{ height: "2rem" }} class="form-control" {...register("password", { required: "true", minLength: 8, maxLength: 16 })} />
              {errors.password?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" , fontSize: "0.8rem"}}> * Enter your Password</span>}
              {errors.password?.type === "minLength" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340", fontSize: "0.8rem" }}> * Password must be minimum 8 Characters in length</span>}              


            </div>



            {/* <div className='col-12'>
              <input type="text" className='mx-2 mt-2 w-100 ips form-control' autoComplete='off' placeholder='Enter Phone Number no' name="phoneno" id="phoneno" maxLength="10" {...register("phoneno", { required: "true", minLength: 10 })} />
            </div> */}
            <button className='mt-4 mb-2 w-100 btn text-dark p-1' style={{ height: "2rem", fontSize: "0.9rem", backgroundColor: "#f0c24d" }} type="submit" > Continue </button>

          </form>

          <span>
            <small> <p className='mb-1 ms-1' style={{ fontSize: "0.8rem" }}> Already Have an Account <div className='btn bg-white p-1' onClick={Moveto} style={{ fontSize: "0.8rem", color: "blue" }}> Sign In? </div></p>
            </small>
          </span>

        </div>



      </div>
      <hr className='line' />
      {/* <div className='text-center mb-5'>
        <span>
          <small> <p className='mb-1 ms-1' style={{ fontSize: "0.8rem" }}> Already Have an Account </p> </small>
        </span>
        <div className='btn btn-warning align-items-center text-center p-1' onClick={Moveto} style={{ width: "10rem", height: "2rem", fontSize: "0.9rem", backgroundColor: "#f0c24d" }}> Sign In </div>
      </div> */}



    </div>
  )
}

export default CreateUser