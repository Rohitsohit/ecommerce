import express from "express";
import { getProducts,storeProducts,addProductToCart,getCartProducts,CartProductDelete, getProductById } from "../Controllers/controlProduct.js";

const router = express.Router();

router.get('/',getProducts);
router.post('/cartProduct',getCartProducts);
router.post('/itemDelete',CartProductDelete);

router.get('/:id',getProductById);


router.post('/storeProduct',storeProducts);
router.post('/addToCart',addProductToCart);

export default router;