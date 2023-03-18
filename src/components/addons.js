import React  from 'react';
import { Row, Col, ProgressBar, Button } from 'react-bootstrap';
import DappLogo from "../img/sorrel-logo.png";

const Addons = () => {
  return (
    <>
   <Row className="rowCard text-left mb-2 mt-4 p-4 m-2">
      <Col md={8} xs={12}>
        <Row>
          <Col md={2} xs={12}>
            <div className="text-center">
              <div className="flex-shrink-0">
                <img
                  src={DappLogo}
                  alt=""
                  className="rounded-circle"
                  height="64"
                />
              </div>
            </div>
          </Col>
          <Col md={10}>
            <span className="text-justify">
              <h4>Sorrel Branch Lounges</h4>
              With Sorrel Lounges, prospective and existing customers can explore our services in an immersive and
              interactive environment across all devices including VR. Lounges also serve as a virtual events hosting space for anyone to use.
            </span><br/>
              <a href="https://docs.sorrelbanq.org/addons/core/[stub]">
              <button 
                className="btn btn-sm btn-outline-secondary mt-4"
              >Read More...</button>
              </a>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={4}>
        <Row>
          <Col md={12} className="overflow-auto text-center">

                <Row>
                  <Col xs={12}>
                    <span className="progress mt-4 border-green">
                      <span className="progress-bar bg-success" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{width:"3%"}}>
                      </span>
                    </span>
                  </Col>
                  <Col xs={12}>
                    <h5 className="mt-3">$9 of $15,000</h5>
                  </Col>
                </Row>


                <Row>
                  <Col xs={12}>
                    <button 
                        className="btn btn-outline-info mt-2"
                      >Crowdfund This</button>
                  </Col>
                </Row>

          </Col>
        </Row>
      </Col>
    </Row>

    </>

  );
};

export default Addons;