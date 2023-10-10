import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {listProducts} from '../actions/productActions'
import Product from './Product'
import { useFetcher, useNavigate, useLocation } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'


function ProductCarousel() {
   const dispatch = useDispatch()
   const productList = useSelector(stage => stage.productList)
   const {error, loading, products } = productList 
   const location =useLocation()
   let keyword = location.search
   useEffect(() => {
    dispatch(listProducts())
   }, [dispatch])

    return (
        <div>
             <h1>Sản phẩm mới nhất</h1>
             {loading ? (
        <Loader/>
      ) : error ? (
        < Message variant='danger'>{error}</ Message> 
      ) : ( <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product}/>
                                </Col>
                            ))}
                        </Row>
            )}
        </div>
    )
}

export default ProductCarousel
