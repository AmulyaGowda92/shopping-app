import axios from "axios"
import { CART_ADD_ITEM, REMOVE_ITEM_FROM_CART } from "../constants/cartConstants";


export const addToCart = (productId,qty) => async(dispatch,getState)=>{
    
    const { data } = await axios.get(`/api/products/${productId}`);

    // const {
    //     cart: { cartItems },
    // } = getState();
    
   
        
        dispatch({

            type: CART_ADD_ITEM,
            payload: {
    
                name: data.name,
                countInStock: data.countInStock,
                image: data.image,
                price: data.price,
                id: data._id,
                qty
            }
        });
}

export const removeItem = (id) => async (dispatch) => {
    
    dispatch({

        type: REMOVE_ITEM_FROM_CART,
        payload: id
    });

}