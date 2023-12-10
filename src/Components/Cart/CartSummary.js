import React from "react";

export default function CartSummary(priceData) {
  console.log(priceData);

  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0">Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <div class="row ">
              <div class="col">
                <strong>Products</strong>
                {priceData.productName.map((name) => (
                  <p>{name}</p>
                ))}
              </div>
              <div class="col-2">
                <strong>Price</strong>
                {priceData.price.map((price) => (
                  <p>${`${price}`}</p>
                ))}
              </div>
            </div>

            <hr className="my-4" />

            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p className="mb-0">(including Taxes)</p>
                </strong>
              </div>
              <span>
                <strong>${`${priceData.totalPrice}`}</strong>
              </span>
            </li>
          </ul>

          <button type="button" className="btn btn-primary btn-lg btn-block">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
