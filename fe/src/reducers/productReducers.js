import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAI
} from '../constants/productConstant'


export const productListReducer =  (state = {products:[]}, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true, product:[]}

        case PRODUCT_LIST_SUCCESS:
            return {loading:false, product: action.payload}

        case PRODUCT_LIST_FAI:
            return {loading:false, error: action.payload}

        default: 
            return state 
    }
}