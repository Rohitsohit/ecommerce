import dataStore  from "../Models/dataStorage.js";
import userSchema from "../Models/userStorage.js";

export const getProducts = async (req, res) => {
     try {
       const productData = await dataStore.find();
       res.status(200).send(productData);
       
     } catch (error) {
       res.status(404).json({ message: error.message });
     }
   };

   export const getProductById = async (req, res) => {
    const id = req.params;
     console.log(id.id);
    try {
      const productData = await dataStore.findById(id.id);
      
    
      res.status(200).send(productData);
      
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

   export const storeProducts = async (req, res) => {
        const  data  = req.body;
        
        const newstoreData = new dataStore(data);
        
     try {
       const datasaved=await newstoreData.save();
       res.json(datasaved);
     } catch (error) {
       res.status(404).json({ message: error.message });
     }
   };


   export const addProductToCart = async (req, res) => {
    const  {productId,email}  = req.body;
    const productObject=await dataStore.findOne({_id:productId});
  
    
    const updateData= await userSchema.findOneAndUpdate({email:email},{$push:{cart:productObject}});
    try {
    res.send("Product Added to Cart"); 
  } catch (error) {
   res.status(404).json({ message: error.message });
  }
  };

  export const getCartProducts = async (req, res) => {
    const  {userEmail}  = req.body;
    const updateData= await userSchema.findOne({email:userEmail});
    try {
    res.send(updateData.cart); 
    } catch (error) {
    res.status(404).json({ message: error.message });
  }
  };


  export const CartProductDelete = async (req, res) => {
    const  {email,productId}  = req.body;
    const productObject=await dataStore.findOne({_id:productId});
    const updateData= await userSchema.findOneAndUpdate({email:email},{$pull:{cart:productObject}},{ multi: true });
    console.log(updateData);
    try {
    
    res.send(updateData.cart); 
    } catch (error) {
    res.status(404).json({ message: error.message });
  }
  };

   