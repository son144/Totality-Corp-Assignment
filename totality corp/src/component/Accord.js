import react from "react";
import "./accord.css";

export default function Accord() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <h3>
              We will try to help you if
              <br />
              you are confused.
            </h3>
            <p>
              A fequently asked question (FAQ) forum is <br />
              often used in articles, websites, email lists,
              <br /> and online forums where common questions
              <br />
              tend to recur.
            </p>
          </div>
          <div class="col-md-7">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h4>What are NFTs used for?</h4>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      From Opensea.io, go to your profile icon and click
                      “Create” in the top <br />
                      right corner. You’ll be taken to the NFT item creation
                      page. This page
                      <br />
                      will allow you to upload your NFT file, name it and add a
                      description.
                    </strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h4>
                      {" "}
                      Are NFTs a good investment? What is the risk of NFTs?{" "}
                    </h4>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      From Opensea.io, go to your profile icon and click
                      “Create” in the top <br />
                      right corner. You’ll be taken to the NFT item creation
                      page. This page
                      <br />
                      will allow you to upload your NFT file, name it and add a
                      description.
                    </strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h4>How to make money with NFTs?</h4>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      From Opensea.io, go to your profile icon and click
                      “Create” in the top <br />
                      right corner. You’ll be taken to the NFT item creation
                      page. This page
                      <br />
                      will allow you to upload your NFT file, name it and add a
                      description.
                    </strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapsefour"
                  >
                    <h4> How much energy/power do NFTs use?</h4>
                  </button>
                </h2>
                <div
                  id="collapsefour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      From Opensea.io, go to your profile icon and click
                      “Create” in the top <br />
                      right corner. You’ll be taken to the NFT item creation
                      page. This page
                      <br />
                      will allow you to upload your NFT file, name it and add a
                      description.
                    </strong>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h4>
                      {" "}
                      Why does NFT art have value? Why are NFTs so expensive?
                    </h4>
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>
                      From Opensea.io, go to your profile icon and click
                      “Create” in the top <br />
                      right corner. You’ll be taken to the NFT item creation
                      page. This page
                      <br />
                      will allow you to upload your NFT file, name it and add a
                      description.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
