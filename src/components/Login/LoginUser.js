import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router';
import { Link, Routes, Route, NavLink } from 'react-router-dom'

// import CreateUser from './CreateUser';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


function LoginUser() {


  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);
  const [currUser, setCurrUser] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm()


  const postData = async (loginData) => {
    let response = await axios.post("http://localhost:8090/CurrentLoggedInUser", loginData)
  }

  const getData = async () => {
    let response = await axios.get("http://localhost:8090/CurrentLoggedInUser");
    let data = response.data[0];
    setCurrUser(...currUser, data)
    // console.log(currUser)
  }

  const validateUser = async (loginData) => {

    let found = false;
    let found1 = false;

    let response = await axios.get("http://localhost:8090/Users");

    response.data.map((element) => {
      if (element.email === loginData.email || element.phone === loginData.email) {
        found = true;
        if (element.password === loginData.password) {
          found1 = true;
          setValidation(true);
          postData(element)
        }
        // sendCartItemsToUsersAccount();
        // console.log(loggedInuser)
      }

    })

    if (found === true && found1 === true) {
      // postData(loginData)
      navigate('/')
      Swal.fire({
        title: '',
        text: 'Logged In',
        icon: 'success',
        // iconColor: 'green',
        confirmButtonText: 'Okay',
        confirmButtonColor: '#90ee90',
        timer: 1300
      })
      // reload();
      // window.location.reload()
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }
    else if (found === true && found1 === false) {
      Swal.fire({
        title: '',
        text: 'Incorrect Password',
        icon: 'error',
        confirmButtonText: 'Close',
        timer: 4000
      })
    }
    else {
      Swal.fire({
        title: '',
        text: 'User Not Found',
        icon: 'warning',
        confirmButtonText: 'Close',
        timer: 4000
      })
    }

  }

  const onFormSubmit = async (loginData) => {
    // getData();
    let response = await axios.get("http://localhost:8090/CurrentLoggedInUser");

    if (response.data.length === 1) {
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
      validateUser(loginData)
    }
    console.log(response.data)
  }

  function Moveto() {
    navigate('/CreateUser')
  }



  return (
    <>

      <div className='container'>
        <div className='col-md-5 col-lg-5 col-sm-12 m-5 mt-4 mb-2 shadow rounded p-4 part1'>
          <h2 classname="me-auto mb-3 pb-3"> Sign-In </h2>
          <br />

          <form onSubmit={handleSubmit(onFormSubmit)} className='text-center'>

            <div class="mb-4 p-0">
              <span>
                <small> <p className='me-auto mb-1 ms-1' style={{ "textAlign": "start", fontSize: "0.8rem" }}> <b>Email or Mobile phone number </b></p> </small>
                <input type="email" id="email" class="form-control" style={{ height: "2rem" }} aria-describedby="emailHelp" {...register("email", { required: "true" })} />
                <error>
                  {errors.email?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340", fontSize: "0.8rem" }}> * Please enter your Email </span>}
                </error>

              </span>

            </div>
            <div class="mb-2">
              <span>
                <small> <p className='me-auto mb-1 ms-1' style={{ "textAlign": "start", fontSize: "0.8rem" }} > <b> Password </b></p> </small>
                <input type="password" id="password" class="form-control" style={{ height: "2rem" }}  {...register("password", { required: "true", minLength: 8, maxLength: 16 })} />
                <error>
                  {errors.password?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340", fontSize: "0.8rem" }}> * Please enter your Password </span>}
                </error>
              </span>

            </div>


            {/* <div className='col-12'>
              <input type="text" className='mx-2 mt-2 w-100 ips form-control' autoComplete='off' placeholder='Enter Phone Number no' name="phoneno" id="phoneno" maxLength="10" {...register("phoneno", { required: "true", minLength: 10 })} />
            </div> */}

            <button className='mt-4 mb-2 w-100 btn text-dark p-1' style={{ height: "2rem", fontSize: "0.9rem", backgroundColor: "#f0c24d" }} type="submit" > Continue </button>

            {/* <div className='text-center mb-3'> */}
            {/* <div className='btn btn-warning align-items-center text-center p-1 w-75'>
                  <input  style={{ height: "2rem", fontSize: "0.9rem", backgroundColor: "#f0c24d", fontFamily: "Encode Sans Semi Condensed, sans-serif" }} type="submit"> Continue </input>
                </div> */}
            {/* <input className='btn' type="submit"> Continue </input> */}
            {/* </div> */}

          </form>

        </div>
      </div>
      <hr className='line' />
      {/* <hr> Hello </hr> */}
      <div className='text-center mb-5'>
        <span>
          <small> <p className='mb-1 ms-1' style={{ fontSize: "0.8rem" }}> New to Amazon? </p> </small>
        </span>
        <div className='btn btn-warning align-items-center text-center p-1' onClick={Moveto} style={{ width: "10rem", height: "2rem", fontSize: "0.9rem", backgroundColor: "#f0c24d" }}> Create an account </div>
      </div>


    </>

  )
}

export default LoginUser