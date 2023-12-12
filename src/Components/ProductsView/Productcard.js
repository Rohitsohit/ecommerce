
import { useDispatch } from "react-redux";
import { addProduct } from '../../actions/product';
import { useNavigate } from 'react-router-dom';
export default function Productcard({product}) {
  const dispatch = useDispatch();
  const history = useNavigate();
  
  
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
 const showProduct = ()=>{
  history(`/productdetails/${product._id}`);
 }
  
  return (
    <div className='col-md-3'>
     <div className="card shadow-lg p-3 mb-5 bg-body rounded rounded-lg " style={{ width: "15rem" }} >
     <img src={product.productImage} height="150" width="120" className="card-img-top" alt="productImage"/>
     <div className="card-body">
       <h5 className="card-title"  >{product.productName.substring(0,20)}...</h5>
       <p className="card-text"  >{product.productDescription.substring(0,40)}...</p>
       <p className="card-text fw-semibold"  >{product.productPrice}</p>
       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
       <button className="btn btn-outline-dark btn-sm m-2y" onClick={showProduct}>Show Details</button>

      <button className="btn btn-outline-dark btn-sm m-2y mx-3" onClick={handleId}>Add to cart</button>
      </div>
     </div>
   </div>
   </div>
  )
}
