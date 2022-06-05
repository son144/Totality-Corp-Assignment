import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container main">
          <div className="row">
            <div className="col-lg-5 col-md-7">
              <section className="widget widget-light">
                <h3 className="widget-title">OpenSea</h3>
                <p className="up">
                  From Opensea.io, go to your profile <br />
                  icon and click “Create” in the top right <br />
                  corner. You’ll be taken to the NFT item
                  <br /> creation page. This page will allow you <br />
                  to upload your NFT file, name it and <br />
                  add a description.
                </p>
              </section>
            </div>
            <div className="col-lg-2 col-md-5">
              <section className="widget widget-light-skin">
                <h3 className="widget-title">Resources</h3>
                <ul>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Platform Status</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Gas-Free Marketplace</a>
                  </li>
                  <li>
                    <a href="#">Suggestions</a>
                  </li>
                  <li>
                    <a href="#">Discord Community</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Docs</a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-lg-2 col-md-5">
              <section className="widget widget-links widget-light-skin">
                <h3 className="widget-title">My Account</h3>
                <ul>
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Favourites</a>
                  </li>
                  <li>
                    <a href="#">My Collections</a>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <h4>Stats</h4>
                  <ul>
                    <li>
                      <a href="#">Rankings</a>
                    </li>
                    <li>
                      <a href="#">Activity</a>
                    </li>
                  </ul>
                </ul>
              </section>
            </div>
            <div className="col-lg-2 col-md-5">
              <section className="widget widget-links widget-light-skin">
                <h3 className="widget-title">Company</h3>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 padding-bottom-1x"></div>
            <div className="col-md-5 padding-bottom-1x">
              <h4>Stay In The Loop</h4>
              <p className="ser">
                Join our mailing list to stay in the loop with out newest
                feature releases
                <br /> NFT drops, and tips & tricks for navigating OpenSea.
              </p>
              <input
                className="form-control"
                type="email"
                name="EMAIL"
                placeholder="E-mail"
              />
              <button className="btn btn-primary">SignUp</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
