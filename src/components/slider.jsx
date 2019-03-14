import React, { Component } from "react";
import Slide from "./slide";
import Next from "./next";
import Previous from "./previous";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      images: [
        "http://kidstudio.co/content/2-home/1-reel.gif",
        "http://kidstudio.co/content/2-home/2-reminder.gif",
        "http://kidstudio.co/content/2-home/3-nike.gif"
      ],
      currentIndex: 0
    };
  }

  handleNext = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };
  handlePrevious = () => {};
  render() {
    return (
      <div className="slider">
        {this.state.images.map((image, i) => (
          <Slide key={i} image={image} />
        ))}
        <Previous handlePrevious={this.handlePrevious} />
        <Next handleNext={this.handleNext} />
      </div>
    );
  }
}

export default Slider;
