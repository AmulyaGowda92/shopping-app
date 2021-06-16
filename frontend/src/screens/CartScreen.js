import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeItem } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

const CartScreen = (props) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.itemsInCart);
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;


    useEffect(() => {
        
        if (productId) {
            
            dispatch(addToCart(productId, qty));
        }
        
    }, [dispatch, productId, qty]);


    const removeFromCart = (id) => {
        
        dispatch(removeItem(id));

    }


    const checkOutHandler = () => {
        
        props.history.push("/signin?redirect=shipping");
    }



    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 
                    ? <MessageBox>Cart is empty <Link to="/">Go back to Home</Link></MessageBox>
                    : (

                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <div className="row">
                                        <div>
                                            <img src={item.image} alt={item.name} className="small" />
                                        </div>

                                        <div className="min-30">
                                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                                        </div>

                                        <div>
                                            <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.id,Number(e.target.value)))}>
                                            {[...Array(item.countInStock).keys()].map(x => (
                                                                        <option key={x + 1} value={x + 1}>{x+1}</option>
                                            ))} 
                                            </select>
                                        </div>

                                        <div>
                                            Rs. {item.price}
                                        </div>

                                        <div>
                                            <button type="button" onClick={() => removeFromCart(item.id)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>

            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>SubTotal of: {cartItems.reduce((a, c) => a + c.qty, 0)} is Rs. {cartItems.reduce((a,b)=>a+b.price*b.qty,0) }</h2>
                        </li>

                        <li>
                            <button type="button" onClick={checkOutHandler} className="primary block" disabled={cartItems.length === 0}>
                                Proceed To Checkout
                            </button>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default CartScreen;
