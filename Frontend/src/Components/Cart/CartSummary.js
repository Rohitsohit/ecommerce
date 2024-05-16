import React from "react";
import axios from "axios";
export default function CartSummary(priceData) {
  
  var cartProduct = priceData.cartProduct;
  const user = JSON.parse(localStorage.getItem("profile-shoper"));
  const userId = user ? user.data.data.myUser.id : null;
  const handleCheckout = ()=>{
    axios.post("https://ecommerce-tawny-pi-19.vercel.app/stripe/create-checkout-session",{cartProduct,
    userId: userId
    },).then((res)=>{
        window.location.href = res.data.url

    }).catch((error)=> console.log(error))
  }

  return (
    <div className="col-md-4">
  <div className="card mb-4">
    <div className="card-header py-3">
      <h5 className="mb-0">Summary</h5>
    </div>
    <div className="card-body">
      <ul className="list-group list-group-flush">
        {priceData.productName.map((name, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>{name} ({1})</strong>
            </div>
            <div>
              <strong>$ {priceData.price[index]}</strong>
            </div>
          </li>
        ))}

        <hr className="my-4" />

        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
          <div>
            <strong>Total amount (including Taxes)</strong>
          </div>
          <span>
            <strong>$ {priceData.totalPrice}</strong>
          </span>
        </li>
      </ul>

      <button type="button" onClick={handleCheckout} className="btn btn-outline-dark">
        Go to checkout
      </button>
    </div>
  </div>
</div>




  );
}
