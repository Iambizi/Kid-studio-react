import React, { Component } from "react";
import NavBar from "./common/navBar";
import Footer from "./common/footer";
import WarpTilt from "./warpTilt";

class Home extends Component {
  state = {
    counter: 1,
    images: [
      "http://kidstudio.co/content/2-home/1-reel.gif",
      "http://kidstudio.co/content/2-home/2-reminder.gif",
      "http://kidstudio.co/content/2-home/3-nike.gif"
    ],
    titles: ["Reel", "The Weeknd - Reminder", "Nike React Hyperdunk"],
    currentIndex: 0,
    translateValue: 0
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  componentDidMount = () => {
    console.log(this.state.currentIndex, "didmount");
  };

  componentDidUpdate = () => {
    console.log(this.state.currentIndex, "update");
  };

  handleNext = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
    if (this.state.counter < 3) {
      this.setState(prevState => ({ counter: prevState.counter + 1 }));
    }
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // this.setState(prevState=>({counter: prevState.counter? prevState.counter +1: 3}));
  };
  handlePrevious = () => {
    if (this.state.counter > 1) {
      this.setState(prevState => ({ counter: prevState.counter - 1 }));
    }
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
    //this.setState(prevState=>({counter: prevState.counter? prevState.counter -1: 1}));
  };

  featureCount() {
    const { counter } = this.state;

    return counter === 1 ? "1" : counter;
  }
  render() {
    let currentSrc = this.state.images[this.state.currentIndex];
    let currentTitle = this.state.titles[this.state.currentIndex];
    return (
      <React.Fragment>
        <NavBar />
        <div className="main-content">
          <div className="Flex-container">
            <div className="noscroll">
              <WarpTilt>
                <img className="home-feature slide" src={currentSrc} alt="" />
              </WarpTilt>
              <div>
                <a onClick={this.handleNext} className="next">
                  NEXT
                </a>
                <a onClick={this.handlePrevious} className="prev">
                  PREVIOUS
                </a>
                <div className="black-line" />
                <div className="title-home" id="label1">
                  <a href="/" className="title-block">
                    {" "}
                  </a>
                  <div className="line1">
                    <p>
                      <a href={currentSrc}>{currentTitle}</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="img-counter"> {this.featureCount()} / 3</div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
