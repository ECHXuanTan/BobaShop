import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {listProducts} from '../actions/productActions'
import Product from '../components/Product'
import { useFetcher } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'


function HomeScreen() {
   const dispatch = useDispatch()
   const productList = useSelector(stage => stage.productList)
   const {error, loading, products } = productList 

   useEffect(() => {
    dispatch(listProducts())
   }, [])

    return (
        <div>
             <h1>Sản phẩm mới nhất</h1>
             { loading ? <Loader/>
                    : error ? < Message variant='danger'>{error}</ Message> 
                        : <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product}/>
                                </Col>
                            ))}
                        </Row>
            }
        </div>
    )
}

export default HomeScreen
