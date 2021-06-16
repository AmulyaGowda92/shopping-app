import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { productDetails } from '../actions/productActions';


const ProductScreen = (props) => {

    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productId = props.match.params.id;

    const productInfo = useSelector(state => state.productDetail);

    const { loading, error, product } = productInfo;

    //console.log(product);


    useEffect(() => {

        dispatch(productDetails(productId))
        
    }, [dispatch, productId]);


    const addToCartHandler = () => {
        
        props.history.push(`/cart/${productId}?qty=${qty}`);

       
    }


    return (

        <div>

        {loading ? <LoadingBox />
            : error ? <MessageBox variant="danger">{error}</MessageBox>
            : (<div>

                <Link to="/">Back To Home</Link>
    
                <div className="productDetails__container">
                    <div className="col-2 p-r">
                        <img className="large" src={product.image} alt={product.name} />
                    </div>
    
                    <div className="col-1">
                        <ul>
                            <li><h2>{product.name}</h2></li>
                            <li>
                                <Rating rating={product.rating} numOfReviews={product.numOfReviews} />
                            </li>
                            <li>
                                Price: Rs. {product.price}
                            </li>
                            <li>
                                Description:
                                 <p>{product.description}</p>
                            </li>
                        </ul>
                    </div>
    
                    <div className="col-1 ht">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div>Rs. {product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>
                                            {product.countInStock > 0
                                                ? <span className="success">In Stock</span>
                                                : <span className="error">UnAvailable</span>
                                            }
                                        </div>
                                    </div>
                                </li>

                                {
                                     product.countInStock > 0 && (
                                        
                                         <>       
                                        <li className="mb">
                                                <div className="row">
                                                      <div>Qty</div>  
                                                        <div>
                                                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                                                    {[...Array(product.countInStock).keys()].map(x => (
                                                                        <option key={x + 1} value={x + 1}>{x+1}</option>
                                                                    ))} 
                                                            </select>
                                                        </div>
                                                 </div>
                                        </li>
                                                    
                                        <li>
                                            <button className="primary block" onClick={addToCartHandler}>Add To Cart</button>
                                        </li>
                                        </>)
                                }        
                                    

                            </ul>
                        </div>
                    </div>
                </div>
            </div>)}


        </div>

        
    )
}

export default ProductScreen;
