
import '../../App.css'
import './Header.css'
import { Link, Routes, Route, NavLink } from 'react-router-dom'
import React, { useReducer } from 'react';
import { useEffect, useState } from "react"
// import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
// import SearchIcon from '@mui/icons-material/Search';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// FOR NAVBARS
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'

// FOR ROUTES
import Home from '../../Routes/Home/Home'
import Accessories from '../../Routes/Accessories/Accessories'
import Decoratives from '../../Routes/Decoratives/Decoratives'
// import Electronics from '../../Routes/Electronics/Electronics'
import Furniture from '../../Routes/Furniture/Furniture'
import Fashions from '../../Routes/Fashion/Fashion'
import Trends from '../../Routes/Trends/Trends'
import Item from '../Item/Item'

import Wishlist from '../../Routes/Wishlist/Wishlist';
import Deals from '../../Routes/Deals/Deals'

import BestSellers from '../../Routes/Trending/BestSellers/BestSellers'
import NewReleases from '../../Routes/Trending/NewReleases/NewReleases'

import MobilesComputers from '../../Routes/ShopBy/MobilesComputers/MobilesComputers'
import Electronics from '../../Routes/ShopBy/Electronics/Electronics';
import Fashion from '../../Routes/ShopBy/Fashion/Fashion';
// import MenFashion from '../../Routes/ShopBy/Fashion/Men/Men'
// import WomenFashion from '../../Routes/ShopBy/Fashion/Women/Women'

import Kitchen from '../../Routes/ShopBy/Kitchen/Kitchen'
import BeautyHealth from '../../Routes/ShopBy/BeautyHealth/BeautyHealth'
import Sports from '../../Routes/ShopBy/Sports/Sports'
import ToysBaby from '../../Routes/ShopBy/ToysBaby/ToysBaby'
import Books from '../../Routes/ShopBy/Books/Books'
import MoviesMusicGames from '../../Routes/ShopBy/MoviesMusicGames/MoviesMusicGames'

import GiftsCards from '../../Routes/GiftCards/GiftsCards'
import Customer from '../../Routes/Customer/Customer'

import Cart from '../Cart/Cart'
import LoginUser from '../Login/LoginUser'
import CreateUser from '../Login/CreateUser';

import CardsView from '../../Routes/CardsView/CardsView'
import EachProduct from '../EachProduct.js/EachProduct';

import icon from '../../Images/logo.png'
import icon1 from '../../Images/headPart.jpg'
import Swal from 'sweetalert2'

function Header() {

    const navigate = useNavigate();
    let [noOfItemsInCart, setnoOfItemsInCart] = useState(0);
    const [loggedInUser, setLoggedInUser] = useState([]);

    // const [reducerValue, forceUpdate] = useReducer( x=>x+1, 0);


    useEffect(() => {
        fetchCartItems();
        fetchLoggedInUser();
        // forceUpdate()
    }, [])

    const fetchCartItems = async () => {
        let response = await axios.get("http://localhost:8090/Cart");
        // console.log(response.data.length);
        setnoOfItemsInCart(response.data.length);
    }

    const fetchLoggedInUser = async () => {
        let response = await axios.get("http://localhost:8090/CurrentLoggedInUser");

        if (response.data.length === 1) {
            setLoggedInUser(response.data);
        }
        // else{
        //     alert("Too many sessions")
        // }
    }

    const navigateToAccount = () => {
        navigate('/user/account');
    }

    const removeItem = async (id) => {
        let removeitem = await axios.delete(`http://localhost:8090/Cart/${id}`);
        console.log(removeitem)
    }

    const emptyCartItems = async () => {

        let cartitems = await axios.get("http://localhost:8090/Cart");

        if (loggedInUser[0].cart.length === 0) {
            let data = { ...loggedInUser[0], cart: cartitems.data }
            let response = await axios.put(`http://localhost:8090/Users/${loggedInUser[0].id}`, data);
            console.log(response)
        }
        
        else{

            let data = {...loggedInUser[0], cart: [] }
            let response1 = await axios.put(`http://localhost:8090/Users/${loggedInUser[0].id}`, data);

            let data1 = {...loggedInUser[0], cart: cartitems.data}
            let response2 = await axios.put(`http://localhost:8090/Users/${loggedInUser[0].id}`, data1);
        }

        let cartitems1 = await axios.get("http://localhost:8090/Cart");
        console.log(cartitems1)
        cartitems1.data.map((element) => {
            console.log(element)
            removeItem(element.id);
        })

    }

    const logOut = async () => {
        let response = await axios.get("http://localhost:8090/CurrentLoggedInUser")
        emptyCartItems();

        let logoutUser = await axios.delete(`http://localhost:8090/CurrentLoggedInUser/${response.data[0].id}`);
        navigate('/');
        Swal.fire({
            title: 'Logged out',
            text: '',
            icon: 'success',
            iconColor: '#FF0000',
            confirmButtonText: 'Close',
            confirmButtonColor: 'Red',
            timer: 1000
          })
          // reload();
          // window.location.reload()
          setTimeout( () => {
            window.location.reload()
          }, 1500)
    }


    return (
        <>
            <div>

                <nav className="navbar navbar-expand-md sticky-top navbar-scroll navbar-dark">

                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link className="navbar-brand nav-link me-5 justify-content-start" to="Home">
                            <img src={icon} className='Homeicon' alt='Main logo' />
                        </Link>

                        {/* <div className="header_option">
                                <FontAwesomeIcon icon={faLocationDot} className="header_loc" />
                                </div> */}

                        <div className="header_search ms-5 me-4 mt-2 justify-content-end">
                            <input type="text" className="header_search_in" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="header_searchIcon" />
                        </div>

                        <div className="collapse navbar-collapse ms-0 ps-0 justify-content-end" id="navbarSupportedContent">


                            <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center text-center">

                                <li className="nav-item text-white">
                                    <span><Link className="nav-link active display-7 text-white" to="Home"> Home  </Link></span>
                                </li>
                                &nbsp; &nbsp;&nbsp; &nbsp;


                                <li className="nav-item">
                                    <Link className="nav-link active text-white position-relative" to="Cart">
                                        Cart &nbsp;<FontAwesomeIcon icon={faCartShopping} className="cart" /> &nbsp;
                                        <span className="translate-middle badge rounded-pill bg-danger text-center " style={{ height: "1.1rem", width: "1rem", fontSize: "0.6rem", padding: "0.2rem" }}>
                                            {noOfItemsInCart}
                                            
                                        </span>
                                        {/* <span className="position-absolute top-2 start-10 translate-middle badge rounded-pill bg-danger">
                                            {noOfItemsInCart}
                                        </span> */}

                                    </Link>
                                </li>
                                &nbsp; &nbsp;
                                {
                                    loggedInUser.length === 1 &&
                                    <li className="nav-item me-1">
                                        <span>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic" className=' text-white'>
                                                    <FontAwesomeIcon icon={faCircleUser} className="user-circle2" /> &nbsp;
                                                    {loggedInUser[0].username}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={navigateToAccount}> Account </Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item onClick={logOut}> Log Out </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </span>
                                    </li>
                                }
                                {

                                    loggedInUser.length === 0 &&
                                    <li className="nav-item mt-2 me-2">
                                        <Link className="active display-7 text-white mt-3" style={{ color: "white" }} to="LoginUser">
                                            Sign-In
                                        </Link>
                                    </li>
                                }

                            </ul>

                        </div>

                    </div>

                </nav>

                <nav class="nav lower navbar-dark">

                    &nbsp; &nbsp;
                    {/* <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>All
                    </button>

                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">

                            <h4 className="offcanvas-title justify-content-start" id="offcanvasScrollingLabel">
                                <FontAwesomeIcon icon={faCircleUser} className="user-circle" />&nbsp;&nbsp;  Hello { }</h4>
                            <button type="button" className="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close" dataclose>
                                <FontAwesomeIcon icon={faXmark} className="xmark" />
                            </button>

                        </div>

                        <div className="offcanvas-body">

                            <h6><Link className="nav-link text-dark" to="CardsView"> &nbsp;Cards View&nbsp;
                                <FontAwesomeIcon icon={faArrowRight} className="user-arrow" /> </Link></h6>

                            <h5 className='headings'> &nbsp;&nbsp; Trending </h5>
                            <Link className="nav-link active text-dark" to="BestSellers"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Best Sellers </Link>
                            <Link className="nav-link active text-dark" to="NewReleases"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New Releases </Link>

                            <hr className='p-0 ms-0 me-0' />

                            <h5 className='headings'> &nbsp;&nbsp; Shop By Department </h5>

                            <Link className="nav-link text-dark" to="MobilesComputers"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobiles, Computers </Link>
                            <Link className="nav-link text-dark" to="Electronics"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TV, Appliances, Electronics </Link>
                            {/* <Link className="nav-link text-dark" to="MenFashion"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Men's Fashion </Link>
                            <Link className="nav-link text-dark" to="WomenFashion"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Women's Fashion </Link> */}
                            <Link className="nav-link text-dark" to="Fashion"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fashion </Link>

                            <hr className='ms-4 me-4'></hr>
                            <Link className="nav-link text-dark" to="Kitchen"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Home, Kitchen </Link>
                            <Link className="nav-link text-dark" to="BeautyHealth"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Beauty, Health </Link>
                            <Link className="nav-link text-dark" to="Sports"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sports, Fitness </Link>
                            <Link className="nav-link text-dark" to="ToysBaby"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toys, Baby Products </Link>
                            <Link className="nav-link text-dark" to="Books"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Books </Link>
                            <Link className="nav-link text-dark" to="MoviesMusicGames"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Movies, Music & Video Games </Link>

                            <hr className='p-0 ms-0 me-0' />

                            <h5 className='headings'> &nbsp;&nbsp; Programs & Features </h5>
                            <Link className="nav-link text-dark" to="GiftsCards"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gift Cards, Recharges </Link>

                            <hr className='p-0 ms-0 me-0' />

                            <h5 className='headings'> &nbsp;&nbsp; Help & Settings </h5>
                            <Link className="nav-link text-dark" to="Customer"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Customer Service </Link>
                            {
                                loggedInUser.length === 1 &&
                                <Link className="nav-link text-dark" to="Home" onClick={logOut}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign Out </Link>
                            }
                            

                        </div>

                    </div>

                    <Link className="nav-link active text-white" to="Wishlist"> WishList </Link>
                    <Link className="nav-link active text-white" tabindex="-1" to="Deals"> Deals </Link>

                    <Link className="nav-link active text-white ms-auto" tabindex="-1" to="Home">
                        <img src={icon1} className='headIcon' alt='Main logo' style={{ pointer: "cursor" }} />
                    </Link>


                </nav>

            </div>


            <div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path='/Accessories' element={<Accessories />} />
                    <Route path='/Decoratives' element={<Decoratives />} />
                    {/* <Route path='/Electronics' element={<Electronics />} /> */}
                    <Route path="/Fashion" element={<Fashion />} />
                    <Route path='/Furniture' element={<Furniture />} />
                    <Route path='/Trends' element={<Trends />} />
                    {/* <Route path='/Login' element={<Login />} /> */}

                    <Route path='/Wishlist/*' element={<Wishlist />} >
                        {/* <Route path="/Item" element={<Item/>} /> */}
                    </Route>
                    <Route path='Deals' element={<Deals />} />


                    <Route path='BestSellers' element={<BestSellers />} />
                    <Route path='NewReleases' element={<NewReleases />} />


                    <Route path='MobilesComputers' element={<MobilesComputers />} />
                    <Route path='Electronics' element={<Electronics />} />
                    {/* <Route path='MenFashion' element={<MenFashion />} />
                    <Route path='WomenFashion' element={<WomenFashion />} /> */}
                    <Route path='Fashion' element={<Fashion />} />

                    <Route path='Kitchen' element={<Kitchen />} />
                    <Route path='BeautyHealth' element={<BeautyHealth />} />
                    <Route path='Sports' element={<Sports />} />
                    <Route path='ToysBaby' element={<ToysBaby />} />
                    <Route path='Books' element={<Books />} />
                    <Route path='MoviesMusicGames' element={<MoviesMusicGames />} />


                    <Route path='GiftsCards' element={<GiftsCards />} />


                    <Route path='Customer' element={<Customer />} />
                    {/* <Route path='Customer' element={<Customer />} /> */}

                    <Route path='Cart' element={<Cart />} />
                    <Route path='LoginUser' element={<LoginUser />} />
                    <Route path="CreateUser" element={<CreateUser />} />

                    <Route path='CardsView' element={<CardsView />} />
                    <Route path='/:name/:id' element={<EachProduct />} />

                </Routes>

            </div>
        </>
    );
}
export default Header









