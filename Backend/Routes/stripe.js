import 'dotenv/config'
import Stripe from 'stripe';
import express from "express";



const stripe = Stripe(process.env.STRIPEKEY);
const router = express.Router();
router.post('/create-checkout-session', async (req, res) => {
    
    const line_items =req.body.cartProduct.map((item)=>{
        return{
            price_data: {
                currency:"usd",
                product_data:{
                    name:item.productName,
                    images:[item.productImage],
                    descrition:item.prodcutDescrition,
                    metadata :{
                        id:item._id
                    },
                },
                unit_amount : item.productPrice*100,
            },
            quantity :1,
        }
    }) 
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: "https://ecomerce-frontend.onrender.com/checkout-success",
        cancel_url: `https://ecomerce-frontend.onrender.com/cart`,
    });

    res.send({ url: session.url });
});

export default  router;
