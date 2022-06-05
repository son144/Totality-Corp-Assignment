import React from "react";
import "./nfts.css";
export default function Nfts() {
  return (
    <>
      <section className="py-5">
        <div className="container my">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <header className="text-center pb-5">
                <h1>Create & Sell Your NFT’s</h1>
                <p>
                  A play of light and shade, chairoscuro is the <br />
                  realm between the light and dark.
                </p>
              </header>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3 mx-auto">
              {/*stating block*/}
              <div class="card">
                <div className="card-body">
                  <h5 className="card-title">Set up your wallet</h5>
                  <p className="card-text">
                    Once you’ve set up your wallet of choice, connect it to
                    OpenSea. Learn about the wallets we support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-auto">
              {/*2nd block */}
              <div class="card">
                <div className="card-body">
                  <h5 className="card-title">Create your collection</h5>
                  <p className="card-text">
                    Click My Collections and set up your collection. Add social
                    links, a description, profile & banner images, and set a
                    secondary.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-auto">
              {/*3rd block*/}
              <div class="card">
                <div className="card-body">
                  <h5 className="card-title">Add your NFT’s</h5>
                  <p className="card-text">
                    Upload your work (image, video, audio, or 3D art), add a
                    title and description, and customize your NFTs stats, and
                    unlockable content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-auto">
              {/*4th block*/}
              <div class="card">
                <div className="card-body">
                  <h5 className="card-title">List them for sale</h5>
                  <p className="card-text">
                    Choose between auctions, fixed-price listings, and
                    declining-price listings. You choose how you want to sell
                    your NFTs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
