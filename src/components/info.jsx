import React, { Component } from "react";
import NavBar from "./common/navBar";
import Footer from "./common/footer";
import WarpTilt from "./warpTilt";



class Info extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main-content">
          <div className="info">
            <div className="info-wrap">
              <div className="info-head">Info</div>
              <div className="info-kid">
                <p>
                  Creative house — design / film. Inspired by our youth;
                  influenced by our city.
                </p>
              </div>
              <div className="info-contact">
                <a href="mailto:projects@kidstudio.co">projects@kidstudio.co</a>
                <br />
                263 Adelaide Street West, Unit 514
                <br />
                Toronto, ON
              </div>
            </div>
          </div>
          <div className="featured-wrapper">
            <div className="featured-info">
              <div
                className="project-List noscroll"
                style={{ marginTop: "-3px" }}
              >
                <WarpTilt>
                  <img
                    alt=""
                    className="info-img2"
                    src="http://kidstudio.co/content/3-info/1.png"
                  />
                </WarpTilt>
                <div
                  id="image1"
                  className="http://kidstudio.co/content/3-info/1.png"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Info;
