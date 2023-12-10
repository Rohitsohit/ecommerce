
import { useDispatch } from "react-redux";
import { addProduct } from '../../actions/product';

export default function Productcard({product}) {
  const dispatch = useDispatch();
 
  
  
  const  handleId=()=>{
    const user =JSON.parse(localStorage.getItem("profile-shoper"))
    if(user){

      const userEmail = user.data.data.myUser.email;
      const initailData={email:"",productId:""};
      initailData.email=userEmail
      initailData.productId=product._id;
      dispatch(addProduct(initailData));
    }
  }
 
  
  return (
    <div className='col-md-3'>
     <div className="card shadow-lg p-3 mb-5 bg-body rounded rounded-lg " style={{ width: "15rem" }} >
     <img src={product.productImage} height="150" width="120" className="card-img-top" alt="productImage"/>
     <div className="card-body">
       <h5 className="card-title"  >{product.productName}</h5>
       <p className="card-text"  >{product.productDescription}</p>
       <p className="card-text fw-semibold"  >{product.productPrice}</p>
       <button className="btn btn-primary" onClick={handleId}>Add to cart</button>
     </div>
   </div>
   </div>
  )
}
