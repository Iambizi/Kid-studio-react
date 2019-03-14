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
  state = { title: "Blog" };
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
                <a
                  href="http://kidstudio.co/blog/gwan"
                  className="blah"
                  style={{ top: "150px", left: "8.74114%" }}
                >
                  <div className="blog-post-info">
                    <div className="blog-post-title">
                      <span className="post-title">Fluent in Roadman</span>
                    </div>
                    <div className="blog-timestamp">19.08.2016</div>
                  </div>
                  <img
                    src="http://kidstudio.co/thumbs/img025-2-1e95747ac327b7c2dd3110d233fba2e8.jpg"
                    alt="img025-2-1e95747ac327b7c2dd3110d233fba2e8"
                  />{" "}
                </a>

                <a
                  href="http://kidstudio.co/blog/la2016"
                  className="blah"
                  style={{ top: "725px", left: "36.2927%" }}
                >
                  <div className="blog-post-info">
                    <div className="blog-post-title">
                      <span className="post-title">California</span>
                    </div>
                    <div className="blog-timestamp">01.04.2016</div>
                  </div>
                  <img
                    src="http://kidstudio.co/thumbs/kid-la-000021-85f52d33e77b1852a91a106add268f7d.jpg"
                    alt="kid-la-000021-85f52d33e77b1852a91a106add268f7d"
                  />{" "}
                </a>

                <a
                  href="http://kidstudio.co/blog/gyg"
                  className="blah"
                  style={{ top: "1300px", left: "9.01415%" }}
                >
                  <div className="blog-post-info">
                    <div className="blog-post-title">
                      <span className="post-title">
                        How Much For A Video, Fam?
                      </span>
                    </div>
                    <div className="blog-timestamp">13.01.2016</div>
                  </div>
                  <img
                    src="http://kidstudio.co/thumbs/roy-woods-7-6dfe3b0a94500a5f1c1b71033abee55f.jpg"
                    alt="roy-woods-7-6dfe3b0a94500a5f1c1b71033abee55f"
                  />{" "}
                </a>

                <a
                  href="http://kidstudio.co/blog/kira"
                  className="blah"
                  style={{ top: "1325px", left: "44.5465%" }}
                >
                  <div className="blog-post-info">
                    <div className="blog-post-title">
                      <span className="post-title">This One's About You</span>
                    </div>
                    <div className="blog-timestamp">15.10.2015</div>
                  </div>
                  <img
                    src="http://kidstudio.co/thumbs/kira-1-1820ff03cc65441dede7d37c52bd3412.png"
                    alt="kira-1-1820ff03cc65441dede7d37c52bd3412"
                  />{" "}
                </a>

                <a
                  href="http://kidstudio.co/blog/kotf"
                  className="blah"
                  style={{ top: "1900px", left: "55.9997%" }}
                >
                  <div className="blog-post-info">
                    <div className="blog-post-title">
                      <span className="post-title">Dad's Gonna Be Mad</span>
                    </div>
                    <div className="blog-timestamp">08.09.2015</div>
                  </div>
                  <img
                    src="http://kidstudio.co/thumbs/img015-6b1af8e4e9e50100a2bf2746bb8cc7ce.jpg"
                    alt="img015-6b1af8e4e9e50100a2bf2746bb8cc7ce"
                  />
                </a>

                <a
                  href="http://kidstudio.co/blog/69"
                  className="blah"
                  style={{ top: "2475px", left: "44.9882%" }}
                >
                  <div className="blog-post-info">
                    <div className="blog-post-title">
                      <span className="post-title">Views From The 69</span>
                    </div>
                    <div className="blog-timestamp">11.08.2015</div>
                  </div>
                  <img
                    src="http://kidstudio.co/thumbs/cyber-0146-920796373f4f75fb66b18bd87cb0eb56.jpg"
                    alt="cyber-0146-920796373f4f75fb66b18bd87cb0eb56"
                  />{" "}
                </a>

                <a
                  href="http://kidstudio.co/blog/safe"
                  className="blah"
                  style={{ top: "3050px", left: "15.1281%" }}
                >
                  <div className="blog-post-info">
                    <div className="blog-post-title">
                      <span className="post-title">
                        Art House Doin’ Numbers
                      </span>
                    </div>
                    <div className="blog-timestamp">10.08.2015</div>
                  </div>
                  <img
                    src="http://kidstudio.co/thumbs/safe-04895-8ee59f3163f707799129aebc33c1de3f.jpg"
                    alt="safe-04895-8ee59f3163f707799129aebc33c1de3f"
                  />{" "}
                </a>

                <a
                  href="http://kidstudio.co/blog/btspique"
                  className="blah"
                  style={{ top: "3075px", left: "61.248%" }}
                >
                  <div className="blog-post-info">
                    <div className="blog-post-title">
                      <span className="post-title">Be You But Be Careful</span>
                    </div>
                    <div className="blog-timestamp">09.08.2015</div>
                  </div>
                  <img
                    src="http://kidstudio.co/thumbs/pique-000081130002-3d3975705ff90d96e5746985a6883edf.jpg"
                    alt="pique-000081130002-3d3975705ff90d96e5746985a6883edf"
                  />{" "}
                </a>
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
