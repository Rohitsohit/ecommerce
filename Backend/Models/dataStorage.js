import mongoose from "mongoose"


const dataSchema = mongoose.Schema({

     productName:String,
     productDescription:String,
     productPrice:String, 
})
const dataStore = mongoose.model('DataStorage',dataSchema);
export default dataStore;