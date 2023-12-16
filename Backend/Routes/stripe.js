// This is your test secret API key.
import Stripe from 'stripe';
import express from "express";

// require("dotenv").config();

const stripe = Stripe("sk_test_51ONkgcG5IHoPuX4lsutWafoYsyiwPBUFrSHLkptY5wrGMmJrEg3tl19nukOaxHnm2eo8i6p9tI4xuUTibF9r7p1T00VPNmYebO");
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
        success_url: "http://localhost:3000/checkout-success",
        cancel_url: `http://localhost:3000/cart`,
    });

    res.send({ url: session.url });
});

export default  router;
