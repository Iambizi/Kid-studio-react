import React, { Component } from "react";
import NavBar from "./common/navBar";
import Footer from "./common/footer";

const backgroundPosition = {
  backgroundPosition: "-611px -57px",
  zIndex: "420"
};

const blogHeader = {
  marginBottom: "15px",
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
  marginTop: "-10px",
  zIndex: "100000000000000000",
  position: "fixed"
};

class Blog extends Component {
  state = {
    title: "Blog",
    entryLink: [
      "http://kidstudio.co/blog/gwan",
      "http://kidstudio.co/blog/la2016",
      "http://kidstudio.co/blog/gyg",
      "http://kidstudio.co/blog/kira",
      "http://kidstudio.co/blog/kotf",
      "http://kidstudio.co/blog/69",
      "http://kidstudio.co/blog/safe",
      "http://kidstudio.co/blog/btspique"
    ],
    entryTitle: [
      "Fluent in Roadman",
      "California",
      "How Much For A Video, Fam?",
      "This One's About You",
      "Dad's Gonna Be Mad",
      "Views From The 69",
      "Art House Doin’ Numbers",
      "Be You But Be Careful"
    ],
    entryTimeStamp: [
      "19.08.2016",
      "01.04.2016",
      "13.01.2016",
      "15.10.2015",
      "08.09.2015",
      "11.08.2015",
      "10.08.2015",
      "09.08.2015"
    ],
    entryImage: [
      "http://kidstudio.co/thumbs/img025-2-1e95747ac327b7c2dd3110d233fba2e8.jpg",
      "http://kidstudio.co/thumbs/kid-la-000021-85f52d33e77b1852a91a106add268f7d.jpg",
      "http://kidstudio.co/thumbs/roy-woods-7-6dfe3b0a94500a5f1c1b71033abee55f.jpg",
      "http://kidstudio.co/thumbs/kira-1-1820ff03cc65441dede7d37c52bd3412.png",
      "http://kidstudio.co/thumbs/img015-6b1af8e4e9e50100a2bf2746bb8cc7ce.jpg",
      "http://kidstudio.co/thumbs/cyber-0146-920796373f4f75fb66b18bd87cb0eb56.jpg",
      "http://kidstudio.co/thumbs/safe-04895-8ee59f3163f707799129aebc33c1de3f.jpg",
      "http://kidstudio.co/thumbs/pique-000081130002-3d3975705ff90d96e5746985a6883edf.jpg"
    ],
    topStyle: [
      "150px",
      "725px",
      "1300px",
      "1325px",
      "1900px",
      "2475px",
      "3050px",
      "3075px"
    ],
    leftStyle: [
      "8.74114%",
      "36.2927%",
      "9.01415%",
      "44.5465%",
      "55.9997%",
      "44.9882%",
      "15.1281%",
      "61.248%"
    ],
    alt: [
      "img025-2-1e95747ac327b7c2dd3110d233fba2e8",
      "kid-la-000021-85f52d33e77b1852a91a106add268f7d",
      "roy-woods-7-6dfe3b0a94500a5f1c1b71033abee55f",
      "kira-1-1820ff03cc65441dede7d37c52bd3412",
      "img015-6b1af8e4e9e50100a2bf2746bb8cc7ce",
      "cyber-0146-920796373f4f75fb66b18bd87cb0eb56",
      "safe-04895-8ee59f3163f707799129aebc33c1de3f",
      "pique-000081130002-3d3975705ff90d96e5746985a6883edf"
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main-content">
          <div className="projects" style={backgroundPosition}>
            <div className="page-headers" style={blogHeader}>
              {this.state.title}
            </div>
            <div className="blog-board">
              <div className="blog-post-wrap">
                {this.state.entryLink.map((entry, i) => (
                  <React.Fragment key={i}>
                    <a
                      href={this.state.entryLink[i]}
                      className="blah"
                      style={{
                        top: this.state.topStyle[i],
                        left: this.state.leftStyle[i]
                      }}
                    >
                      <div className="blog-post-info">
                        <div className="blog-post-title">
                          <span className="post-title">
                            {this.state.entryTitle[i]}
                          </span>
                        </div>
                        <div className="blog-timestamp">
                          {this.state.entryTimeStamp[i]}
                        </div>
                      </div>
                      <img
                        src={this.state.entryImage[i]}
                        alt={this.state.alt[i]}
                      />{" "}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;
