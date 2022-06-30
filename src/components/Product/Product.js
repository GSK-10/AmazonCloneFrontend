
import React from 'react';
// import Card from 'react-bootstrap/Card'
import '../ProductObj/Products.css'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

function Product({ product }) {
    return (
        <>
            {/* <Card style={ { width: '16rem', padding: '1rem', margin: '2rem'} }>
                <Card.Img variant="top" src= {product.image} />
                <Card.Body>
                    <Card.Title> {product.title} </Card.Title>
                    <Card.Text>
                        <h3>Price:${product.price}</h3>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. 
                    </Card.Text>
                    <button variant="primary text-center">Add to Cart</button>
                </Card.Body>
            </Card> */}
            <div className='cards'>
                <img className='card-img' src={product.image} alt="Common Component" />
                <span> <h6> {product.description}</h6> </span>
                <p> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon> {product.price}.00 </p>
                
                <small> <button className='btn btn-primary'> Add to Cart  </button> </small>
                <div className='card-body'>

                </div>
                {/* <div className='card-footer'>

                </div> */}
            </div>
            {/* <div class="cards">
                <img src={product.image} class="card-img"/>
                <div class="card-body">
                    <span> <h6> {product.description}</h6> </span>
                    <p> <FontAwesomeIcon icon={faIndianRupee} className="Rupee" > </FontAwesomeIcon> {product.price}.00 </p>
                </div>
                <div class="card-footer">
                    <button className='btn btn-primary'> <small>Add to Cart </small>  </button>
                </div>
            </div> */}
        </>
    );
}
export default Product