import React from 'react'
import "../../App.css"
export default function CheckOutSuccess() {
  return (
    <div class="container mt-4 mb-4">
      <div class="row d-flex cart align-items-center justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div>
              <div class="col-md-6 border-right p-5">
                <div class="text-center order-details">
                  <div class="d-flex justify-content-center mb-5 flex-column align-items-center"> 
                  <span class="check1">
                    <i class="fa fa-check"></i>
                    </span> <span class="font-weight-bold">Order Confirmed</span> 
                    <small class="mt-2">Your illustraion will go to you soon</small>  
                  </div> 
                  <button href="/" class="btn btn-danger btn-block order-button">Explore More Products</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
