import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./common/navBar";
import Footer from "./common/footer";
import $ from "jquery";
// import okHover from "/Users/amir/Desktop/repos/kid-react/src/vendor/okhover.js";

// $.fn.okHover = okHover;

const backgroundPosition = {
  backgroundPosition: "-450px 29px",
  zIndex: "420"
};

class Film extends Component {
  state = { title: "Film" };

  constructor() {
    super();
    this.link = React.createRef();
  }
  okHova = () => {
    // var link = this.link.current;
    // $(link).okhover({
    //   fadeIn: true,
    //   fadeOut: true,
    //   zIndex: 420,
    //   fadeInDuration: 200,
    //   el: ".projects"
    //});
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main-content">
          <div className="projects" style={backgroundPosition}>
            <div className="page-headers">{this.state.title}</div>
            <div className="project-list">
              <center>
                <Link
                  onMouseOver={this.okHova}
                  ref={this.link}
                  data-okimage="http://kidstudio.co/film/reel-2018/reel.gif"
                  to="http://kidstudio.co/film/reel-2018"
                  className="project-links"
                >
                  Reel 2018
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/nikereact/nike.gif"
                  to="http://kidstudio.co/film/nikereact"
                  className="project-links"
                >
                  Nike React Hyperdunk
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/no-stylist/stylist.gif"
                  to="http://kidstudio.co/film/no-stylist"
                  className="project-links"
                >
                  French Montana ft. Drake 'No Stylist'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/reminder/reminder.gif"
                  to="http://kidstudio.co/film/reminder"
                  className="project-links"
                >
                  The Weeknd 'Reminder'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/king-of-the-fall/featured1.png"
                  to="http://kidstudio.co/film/king-of-the-fall"
                  className="project-links"
                >
                  The Weeknd 'King of The Fall'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/bounce-back/bb.gif"
                  to="http://kidstudio.co/film/bounce-back"
                  className="project-links"
                >
                  Big Sean 'Bounce Back'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/cos/cos.gif"
                  to="http://kidstudio.co/film/cos"
                  className="project-links"
                >
                  Future 'Comin Out Strong'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/slime/htk.gif"
                  to="http://kidstudio.co/film/slime"
                  className="project-links"
                >
                  Hard to Kill 'Slime'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/cyber69/cyber.gif"
                  to="http://kidstudio.co/film/cyber69"
                  className="project-links"
                >
                  Nowness Short: Cyber69
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/rwr119/rwr-bmp.gif"
                  to="http://kidstudio.co/film/rwr119"
                  className="project-links"
                >
                  Red Wine Revelations 119
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/ex-calling/excalling.gif"
                  to="http://kidstudio.co/film/ex-calling"
                  className="project-links"
                >
                  6LACK 'Ex Calling'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/wet-d/wetdreams.gif"
                  to="http://kidstudio.co/film/wet-d"
                  className="project-links"
                >
                  Saya 'Wet Dreams'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/go-go-g/go.gif"
                  to="http://kidstudio.co/film/go-go-g"
                  className="project-links"
                >
                  Roy Woods 'Go Go Go'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/gbuu/gbuu.gif"
                  to="http://kidstudio.co/film/gbuu"
                  className="project-links"
                >
                  Roy Woods 'Gwan Big Up Urself'
                </Link>
                <br />
                <Link
                  data-okimage="http://kidstudio.co/film/smalltalk/smalltalk.gif"
                  to="http://kidstudio.co/film/smalltalk"
                  className="project-links"
                >
                  Majid Jordan 'Small Talk'
                </Link>
                <br />
              </center>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Film;
