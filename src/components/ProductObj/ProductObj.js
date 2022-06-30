
import React from 'react';
import CardObj from '../Product/Product';
import './Products.css'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

function ProductObj({products}) {
    return (
        <>
            <main className="container">
                {/* <Row className='p-2'> */}

                    {/* <Col xs={6} md={4}> */}
                    {
                        products.map((product, index) =>
                            <>
                                <CardObj key = {index} product = { product } />
                            </>
                        )
                    }
                    {/* </Col> */}
                {/* </Row> */}

            </main>
        </>
    );
}
export default ProductObj