import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { useSelector } from 'react-redux';

function App() {

    const cart = useSelector(state => state.itemsInCart);
    const { cartItems } = cart;

    return (
    
    <Router>
    <div className="grid-container">
    <header className="row">
        <div>
            <Link to="/" className="brand">Vanheusen</Link>
        </div>
        <div>
                        <Link to="/cart">Cart {cartItems.length > 0 && (<span className="badge">{cartItems.length}</span>)}</Link>
           
        </div>
    </header>

    <main>
        
        <Switch>
            <Route exact path="/" component={HomeScreen} />         
            <Route exact path="/product/:id" component={ProductScreen} />         
            <Route exact path="/cart/:id?" component={CartScreen} />         
        </Switch>

    </main>

    <footer className="row center">
        All rights reserved
    </footer>
    </div>
</Router>
  );
}

export default App;
