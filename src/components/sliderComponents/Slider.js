import React from "react";
import sliderImage1 from "../../assets/banner_1.png";
import sliderImage2 from "../../assets/banner_2.png";
import classes from "./slider.module.css";

export default function slider({ title }) {
  return (
    <div
      className={`container-fluid mt-4 py-3 px-xl-5 px-md-3 px-sm-3 ${classes.sliderContainer}`}
    >
      <h3 className={classes.heading}>{title}</h3>
      <div className={`d-flex ${classes.sliderScrollEffect}`}>
        <div className="container-fluid mt-5 mb-3">
          <div className={`row ${classes.cardsContainer}`}>
            <div className={`col-md-4 ${classes.card}`}>
              <div className="card p-3 mb-2 bg-transparent">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center"></div>
                </div>
                <div className="mt-5">
                  <p className="text-white">Collection</p>
                  <h3 className="heading text-white">Most popular</h3>
                </div>
              </div>
            </div>
            <div className={`col-md-4 ${classes.card}`}>
              <div className="card p-3 mb-2 bg-transparent">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center"></div>
                </div>
                <div className="mt-5">
                  <p className="text-white">Collection</p>
                  <h3 className="heading text-white">Most popular</h3>
                </div>
              </div>
            </div>
            <div className={`col-md-4 ${classes.card}`}>
              <div className="card p-3 mb-2 bg-transparent">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center"></div>
                </div>
                <div className="mt-5">
                  <p className="text-white">Collection</p>
                  <h3 className="heading text-white">Most popular</h3>
                </div>
              </div>
            </div>
            <div className={`col-md-4 ${classes.card}`}>
              <div className="card p-3 mb-2 bg-transparent">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center"></div>
                </div>
                <div className="mt-5">
                  <p className="text-white">Collection</p>
                  <h3 className="heading text-white">Most popular</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
