
import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import './Carousel.css'

// IMAGES
import Image1 from '../../Images/advertise14.jpg'
import Image2 from '../../Images/advertise11.jpg'
import Image3 from '../../Images/advertise10.jpg'
import Image4 from '../../Images/advertise9.jpg'
import Image5 from '../../Images/advertise13.jpg'



function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src= {Image1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={Image2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={Image3}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={Image4}
                        alt="Fourth slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src={Image5}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}
// render(<ControlledCarousel />);
export default ControlledCarousel;