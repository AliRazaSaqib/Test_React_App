import React from "react";
import globalStyles from "../../global.module.css";
import footerStyles from "./footer.module.css";
const classes = { ...globalStyles, ...footerStyles };

export default function Footer() {
  return (
    <div className="position-relative vh-150">
      <div
        className={`mt-5 pt-5 pb-5 position-absolute w-100 text-dark py-3 px-xl-5 px-md-3 px-sm-3 ${classes.footerBg}`}
      >
        <div className="container-fluid ">
          <div className={`row ${classes.footerRow}`}>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Support</h4>
              <ul className="m-0 p-0">
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Help Center
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    AirCover
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Safety information
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Supporting people with disabilities
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Cancellation options
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Our COVID-19 Response
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Report a neighborhood concern
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Community</h4>
              <ul className="m-0 p-0">
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Help Center
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    AirCover
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Safety information
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Supporting people with disabilities
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Cancellation options
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Our COVID-19 Response
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Report a neighborhood concern
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Hosting</h4>
              <ul className="m-0 p-0">
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Help Center
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    AirCover
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Safety information
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Supporting people with disabilities
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Cancellation options
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Our COVID-19 Response
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Report a neighborhood concern
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Airbnb</h4>
              <ul className="m-0 p-0">
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Help Center
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    AirCover
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Safety information
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Supporting people with disabilities
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Cancellation options
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Our COVID-19 Response
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="#" className="text-decoration-none">
                    Report a neighborhood concern
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className={`col ${classes.copyright}`}>
              <p>
                <small className="text-dark">
                  © 2020. All Rights Reserved By Ali Raza
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
