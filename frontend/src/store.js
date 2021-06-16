import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';


const saveState = (state) => {
    if (state.itemsInCart.cartItems.length !== 0) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  };
  
  const getState = () => {
    try {
      const s = localStorage.getItem("state");
  
      if (s === null) return undefined;
      return JSON.parse(s);
    } catch (e) {
      return undefined;
    }
  };
  
  const initialState = getState();
//   const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
//   store.dispatch(fetchData());
  

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailsReducer,
    itemsInCart:cartReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk,saver)));

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState({
      itemsInCart: store.getState().itemsInCart
    })
  })

export default store;