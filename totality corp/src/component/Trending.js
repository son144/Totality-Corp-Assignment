import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./trending.css";
export default function Trending() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-center">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <div className="heading">
                <h3>Trending in All Categories</h3>
                <p>
                  A play of light and shade, chairoscuro is the <br /> realm
                  between the light and dark.
                </p>
              </div>
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              {/*Wrapper for carousel items*/}
              <div className="carousel-inner">
                <div className="item active">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1946.png"
                            className="img-responsive"
                            alt="second"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>FriYaywiz</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1947.png"
                            className="img-responsive"
                            alt="second"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>Pixelwizards</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1948.png"
                            className="img-responsive"
                            alt="third"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>Aesthetic’smatter</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1946.png"
                            className="img-responsive"
                            alt="second"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>FriYaywiz</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1947.png"
                            className="img-responsive"
                            alt="second"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>Pixelwizards</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1948.png"
                            className="img-responsive"
                            alt="third"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>Aesthetic’smatter</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1946.png"
                            className="img-responsive"
                            alt="second"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>FriYaywiz</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1947.png"
                            className="img-responsive"
                            alt="second"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>Pixelwizards</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src="./image/Rectangle 1948.png"
                            className="img-responsive"
                            alt="third"
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>Aesthetic’smatter</h4>
                          <p>
                            A play of light and shade, chairoscuro is the realm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Carousel controls */}
              <a
                className="carousel-control left"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control right"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
