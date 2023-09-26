import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAI,
    PRODUCT_LIST_FAIL
} from '../constants/productConstant'


const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products/')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.respone && error.respone.data.message
            ? error.respone.data.message
            : error.respone
        })
    }
}