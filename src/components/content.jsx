import React, { Component } from "react";

const mainContent = {
  display: "block",
  zIindex: "565656"
};

class Content extends Component {
  state = { title: "Design" };
  render() {
    return (
      <React.Fragment>
        <div className="content" style={mainContent}>
          <div className="projects">
            <div className="page-headers">{this.state.dtitle}</div>
            <div className="project-List">
              <center />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
