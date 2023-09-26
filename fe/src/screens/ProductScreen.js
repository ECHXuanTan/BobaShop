import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'

  function ProductScreen({match}) {
    const [qty, setQty] = useState(1)
    const history = useNavigate();
    const addToCartHandler = () => {
        history(`/cart/${id}?qty=${qty}`)
    }


    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    const { id } = useParams();

    useEffect(() => {
        dispatch(listProductDetails(id))
      }, [dispatch, id]);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Quay về
      </Link>
      {loading ? (
        <Loader/>
      ) : error ? (
        < Message variant='danger'>{error}</ Message> 
      ) : (
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
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} đánh giá`}
                  color={'#f8e825'}
                />
              </ListGroup.Item>

              <ListGroup.Item>Giá: {product.price}đ</ListGroup.Item>

              <ListGroup.Item>Mô tả: {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
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
                    <Col>{product.countInStock > 0 ? 'Còn hàng' : 'Hết hàng'}</Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                    <ListGroup.Item>
                        <Row>
                            <Col>Số lượng: </Col>
                            <Col xs='auto' className='my-1'>
                                <Form.Control
                                    as="select"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                >
                                    {

                                        [...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))
                                    }

                                </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    disabled={product.countInStock === 0}
                    type="button"
                  >
                    Thêm vào giỏ
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}


export default ProductScreen
