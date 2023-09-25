import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

  function ProductScreen({match}) {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
          try {
            const { data } = await axios.get(`/api/product/${id}`);
            setProduct(data);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchProduct();
      }, []);
  return (
    <div>

      <Link to='/' className='btn btn-light my-3'>Quay về</Link>
      <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} đánh giá`} color={'#f8e825'} />
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Giá: {product.price}đ
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Mô tả: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Giá:</Col>
                                <Col>
                                    <strong>{product.price}đ</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Tình trạng:</Col>
                                <Col>
                                    {product.countInStock > 0 ? 'Còn hàng' : 'Hết hàng'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                                                <Button
                                                    className='btn-block'
                                                    disabled={product.countInStock == 0}
                                                    type='button'>
                                                    Add to Cart
                                                </Button>
                                            </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen