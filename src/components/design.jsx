import React, { Component } from "react";
import NavBar from "./common/navBar";
import Footer from "./common/footer";

const backgroundPosition = {
  backgroundPosition: "-611px -57px",
  zIndex: "420"
};

class Design extends Component {
  state = { title: "Design" };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main-content">
          <div className="projects" style={backgroundPosition}>
            <div className="page-headers">{this.state.title}</div>
            <div className="project-List">
              <center />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Design;
