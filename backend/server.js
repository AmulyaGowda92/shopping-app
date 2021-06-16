import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';


const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://react-shopping-cart-db:shoppingcart@cluster0.n9q3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
})


// app.get('/api/products/:id', (req, res) => {
    
//     const product = data.products.find(x => x._id === req.params.id);

//     if (product) {
        
//         res.send(product);
//     }

//     else {
        
//         res.status(404).send({ message: "Product Not Found" });
//     }
   
// })

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.use((err, req, res, next)=> {
    
    res.status(500).send({ message: err.message });
})





app.get('/', (req, res) => {
    
    //console.log("Server is Ready");

    res.send("Server is Ready");
})


const port = process.env.PORT || 5000;


app.listen(port, () => {
    
    console.log(`Server running on port : ${port}`);

})