// This is your test secret API key.
import Stripe from 'stripe';
import express from "express";

// require("dotenv").config();

const stripe = Stripe("sk_test_51ONkgcG5IHoPuX4lsutWafoYsyiwPBUFrSHLkptY5wrGMmJrEg3tl19nukOaxHnm2eo8i6p9tI4xuUTibF9r7p1T00VPNmYebO");
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1ONoS2G5IHoPuX4lr0claOTQ',
                quantity: 1,
              },
        ],
        mode: 'payment',
        success_url: "http://localhost:3000/checkout-success",
        cancel_url: `http://localhost:3000/cart`,
    });

    res.send({ url: session.url });
});

export default  router;
