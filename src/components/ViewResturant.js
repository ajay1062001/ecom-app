import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../styles/view.css';


function ViewResturant() {

    // const [products, setProducts] = useState([]);

    // useEffect(()=> {
    //     fetchAllProducts().then(resp=> setProducts(resp.data));
    // },[])

    return(
        
        
<div className="container card mb-4">
<div class="card-header py-3">
        <h5 class="mb-0">View Resturant</h5>
      </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th><span>Name</span></th>
                      <th><span>Address</span></th>
                      <th className="text-center"><span>Manager Name</span></th>
                      <th><span>Phone Number</span></th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                     
                        {/* <a href="#" className="user-link">KFC</a> */}
                        <span>KFC</span>
                      </td>
                      <td className='Address'>
                        <span>
                      702, Prism Towers, Link Road, Goregaon West (Behind Hypercity, Mindspace), Mumbai, Maharashtra,India </span>
                      </td>
                      <td className="text-center">
                        <span className="label label-default">Ajay</span>
                      </td>
                      <td>
                        <span>+(91)-22-61522692</span>
                      </td>
                      <td style={{width: '20%'}}>
                       
                        <a href="#" className="table-link">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x" />
                            <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                        <a href="#" className="table-link danger">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x" />
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                     
                        {/* <a href="#" className="user-link">KFC</a> */}
                        <span>Dominos</span>
                      </td>
                      <td className='Address'>
                        <span>
                        Tower-D, Plot No. 5,
5th Floor, Logix Techno Park,
Sector 127, Noida - 201304, U.P. </span>
                      </td>
                      <td className="text-center">
                        <span className="label label-default">Ravi</span>
                      </td>
                      <td>
                        <span>+(91)-22-61522456</span>
                      </td>
                      <td style={{width: '20%'}}>
                       
                        <a href="#" className="table-link">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x" />
                            <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                        <a href="#" className="table-link danger">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x" />
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                     
                        {/* <a href="#" className="user-link">KFC</a> */}
                        <span>Hotel Saravana Bhavan</span>
                      </td>
                      <td className='Address'>
                        <span>
                        P-13/90, Main Road, Connaught Place, Delhi - 110001, Near Madras Hotel, Outer Circle </span>
                      </td>
                      <td className="text-center">
                        <span className="label label-default">Gopi</span>
                      </td>
                      <td>
                        <span>+(91)-33-61522456</span>
                      </td>
                      <td style={{width: '20%'}}>
                       
                        <a href="#" className="table-link">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x" />
                            <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                        <a href="#" className="table-link danger">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x" />
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ViewResturant;