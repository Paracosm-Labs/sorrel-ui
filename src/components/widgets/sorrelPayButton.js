import React, { useState } from 'react';
import DappLogo from "../../img/sorrel-logo.png";
import { Modal, Button, Select } from 'react-bootstrap';

const SubscribeButton = () => {


  return (
    <>
    <button type="button" className="btn btn-primary m-3 sorrel-btn" data-bs-toggle="modal" data-bs-target="#payModal">
      <div className="flex-shrink-0">
        <img
          src={DappLogo}
          alt=""
          className="rounded-circle"
          height="32"
        /> <b className="text-sorrel-purple">Sorrel</b> <b className="text-sorrel-green">Pay</b>
      </div>
     
    </button>

<div className="sorrel-pay modal fade" id="payModal" tabindex="-1" aria-labelledby="payModalLabel" aria-hidden="true">
  <div className="modal-dialog text-center">
    <div className="modal-content">
      <div className="modal-header">
       <div className="flex-shrink-0">
        <h5 className="" id="payModalLabel">
 
        <img
          src={DappLogo}
          alt=""
          className="rounded-circle"
          height="42"
        />&nbsp;<span className="text-sorrel-purple">Sorrel</span></h5></div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        <div className="row">
        <div className="col"></div>
        <div className="col-10">
          <h3>Bob's Electronics</h3><br/>
          <h5>Deliver To:</h5>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected value="1">Primary Address</option>
            <option value="2">Skybox Address</option>
          </select><br/>
        </div>
        <div className="col"></div>
        </div>


        
        <button type="button" className="btn sorrel-success px-5" data-bs-dismiss="modal">Pay $500.00</button>
      </div>
      <div className="modal-footer">

      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default SubscribeButton;