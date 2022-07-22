import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function UpdateResturant() {

    // const [pName, setPName] = useState('');
    // const [pPrice, setPPrice] = useState('');
    // const [pCategory, setPCategory] = useState('');

    // const handleSubmit = () => {

    //     const payload = {
    //         productName: pName,
    //         productPrice: pPrice,
    //         category: pCategory
    //     }

    //     addProduct(payload).then(resp => alert("Product is saved with id: " + resp.data.productId))
    // }

    return (
        <div>
           
  {/* <div class="row justify-content-center">
    <h1>Add Resturant</h1>
    <div class="form-group">
             <label for="exampleFormControlInput1">Resturant Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Resturant Name"></input>
           </div>
  </div>
  <div class="form-group">
             <label for="exampleFormControlInput1">Resturant Address</label>
            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter Resturant Address"></input>
           </div>
  </div> */}

         
<div>
  <div>
    <div class="container card mb-4">
      <div class="card-header py-3">
        <h5 class="mb-0">Update Resturant</h5>
      </div>
      <div class="card-body">
        <form>
         
          <div class="row mb-4">
            
              <div class="form-outline">
              
                <input type="text" id="form7Example1" class="form-control"  placeholder='Resturant Name'/>
                
              </div>
            </div>
            <div class="form-outline mb-4">
            <input type="text" id="form7Example4" class="form-control" placeholder='Address' />
            
          </div>

          
          <div class="form-outline mb-4">
            <input type="email" id="form7Example5" class="form-control" placeholder='Manager Name' />
            
          </div>

         
          <div class="form-outline mb-4">
            <input type="number" id="form7Example6" class="form-control" placeholder='Contact Number' />
           
          </div>

          {/* <div class="form-outline mb-4">
            <textarea class="form-control" id="form7Example7" rows="4"></textarea>
            <label class="form-label" for="form7Example7">Additional information</label>
          </div> */}

         
          
        </form>
      </div>
    </div>
  </div>
  </div>
  <button type="button" class="btn btn-primary btn-lg btn-block">
          Update
        </button>
        </div>
    )
}

export default UpdateResturant;