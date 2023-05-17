import React, { useState } from 'react';
import DappLogo from "../../img/sorrel-logo.png";
import { Modal, Button, Select } from 'react-bootstrap';

const SubscribeButton = () => {


  return (
    <>
    <button type="button" className="btn btn-primary m-3 sorrel-btn" data-bs-toggle="modal" data-bs-target="#subscribeModal">
      <div className="flex-shrink-0">
        <img
          src={DappLogo}
          alt=""
          className="rounded-circle"
          height="32"
        /> <b className="text-sorrel-purple">Sorrel</b> <b className="text-sorrel-green">Subscribe</b>
      </div>
     
    </button>

<div className="sorrel-pay modal fade" id="subscribeModal" tabindex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
       <div className="flex-shrink-0">
        <h5 className="" id="subscribeModalLabel">
 
        <img
          src={DappLogo}
          alt=""
          className="rounded-circle"
          height="42"
        />&nbsp;<span className="text-sorrel-purple">Sorrel</span></h5></div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h3>Fresh Whole Foods</h3><br/>
<div className="row">
<div className="col"></div>
<div className="col-10">
<select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected value="1">Basic Plan - $5 Per Day</option>
  <option value="2">Standard Plan - $15 Per Day</option>
  <option value="3">Pro Plan - $25 Per Day</option>
</select>
</div>
<div className="col"></div>
</div>
<div className="row">
<div className="col"></div>
<div className="col-10"><br/>
<h5>Duration</h5>
<select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected value="1">1 Month</option>
  <option value="2">3 Months</option>
  <option value="3">6 Months</option>
  <option value="4">12 Months</option>
  <option value="5">24 Months</option>
</select><br/>
</div>
<div className="col"></div>
</div>

        <h6>10% Discount</h6>
        <button type="button" className="btn sorrel-success px-5 mt-2" data-bs-dismiss="modal">Subscribe for $150.00<br/>
        <small>$5 x 30 Days</small>
        </button>
        
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