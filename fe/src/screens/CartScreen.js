import React, { useEffect } from 'react'
import { Link, useParams ,useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart} from '../actions/cartActions'

function CartScreen({ history }) {
    const { id} = useParams();

    const productId = id
    const location = useLocation()
    const qty = location && location.search ? Number(new URLSearchParams(location.search).get('qty')) : 1;
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
return (


<div>Cart</div>
)
}

export default CartScreen