import { CART_ADD_ITEM, REMOVE_ITEM_FROM_CART } from "../constants/cartConstants";


export const cartReducer = (state = {cartItems: []} , action) => {
    
    switch (action.type) {
        
        case CART_ADD_ITEM:

            const item = action.payload;

            let itemExists = state.cartItems.find((x) => x.id === item.id);

            //let itemIndex = state.cartItems.findIndex((x) => x.id === item.id);

            //const tQty = state.cartItems.qty + item.qty;



            if (itemExists) {

                // itemExists.qty = itemExists.qty + item.qty;

                // state.cartItems[itemIndex] = itemExists;

                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.id === itemExists.id ? item : x)
                    //cartItems:state.cartItems
                    
                }
            }

            else {
                
                return {
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }

        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(x=>x.id!==action.payload)
            }
            
           
        default:
            return state;
            
    }

}

