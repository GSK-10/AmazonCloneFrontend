
import React from 'react';
import Item from '../Item/Item';
// import {Items} from '../FakeData/Required'
import './Display.css'
import Image5 from '../../Images/small_image1.jpg'
// import { Route, Routes } from 'react-router-dom';

// import { Link, Routes, Route } from 'react-router-dom'
// import Accessories from '../Routes/Accessories'
// import icon from '../Images/logo.png'


function Display() {

    const Items = [
        {
            "id": 1,
            "image1": "",
            "image2": 4000,
            "image3": "Monkey bro...",
            "image4": ""
        },
        {
            "id": 2,
            "image1": "",
            "image2": 4000,
            "image3": "Monkey bro...",
            "image4": ""
        },
        {
            "id": 3,
            "image1": "",
            "image2": 4000,
            "image3": "Monkey bro...",
            "image4": ""
        },
        {
            "id": 4,
            "image1": "",
            "image2": 4000,
            "image3": "Monkey bro...",
            "image4": ""
        },
    ]



    return (
        <>
            <div className='container d-flex all-items border '>
                {
                    Items.map((item, index) =>
                        <>
                            {/* <Item key={index} item={item} /> */}

                        </>
                    )
                }
                {/* <Item /> */}
                <div className='cards'>
                    <h5> Sample </h5>
                    <img className='card-img' src={Image5} alt="Common Component" />
                </div>

                <div className='cards'>
                    <h5> Sample </h5>
                    {/* <img className='card-img' src={Image5} alt="Common Component" /> */}
                    {/* <Link className="card-img nav-link" to="Accessories"> 
                        <img src={icon} className="Homeicon" alt='Main logo'/>
                    </Link> */}
                </div>

                <div className='cards'>
                    <h5> Sample </h5>
                    <img className='card-img' src={Image5} alt="Common Component" />
                </div>

                {/* <Routes>
                    <Route path = "/Accessories" element={ <Accessories/> } />  
                </Routes> */}



            </div>
        </>
    );
}
export default Display