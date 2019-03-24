import React, { Component } from "react";
// import Slide from "./slide";
// import Next from "./next";
// import Previous from "./previous";
import PropTypes from 'prop-types'


// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1,
//       images: [
//         "http://kidstudio.co/content/2-home/1-reel.gif",
//         "http://kidstudio.co/content/2-home/2-reminder.gif",
//         "http://kidstudio.co/content/2-home/3-nike.gif"
//       ],
//       currentIndex: 0
//     };
//   }

//   handleNext = () => {
//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex + 1
//     }));
//   };
//   handlePrevious = () => {};
//   render() {
//     return (
//       <div className="slider">
//         {this.state.images.map((image, i) => (
//           <Slide key={i} image={image} />
//         ))}
//         <Previous handlePrevious={this.handlePrevious} />
//         <Next handleNext={this.handleNext} />
//       </div>
//     );
//   }
// }

// export default Slider;

const carouselContainer = {
  display:"flex",
  margin: '0 0 20px 20px',
  transition: `${(props) => props.sliding ? 'none' : 'transform 1s ease'}`,
  transform: `${(props) => {
    if (!props.sliding) return 'translateX(calc(-80% - 20px))'
    if (props.direction === 'prev') return 'translateX(calc(2 * (-80% - 20px)))'
    return 'translateX(0%)'
  }};`
}


const wrapper = {
  width:"100%",
  overflow:"hidden"
}

const carouselSlot = {
  flex:"1 0 100%",
  flexBasis: "80%",
  marginRight: "20px",
  order:`${(props)=>props.order}`
}

class Carousel extends Component {

  constructor(props){
    super(props)
    this.state = {
      position: 0,
      direction:'next',
      sliding: false
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
  
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
  
    return itemIndex - position
  }
  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
  
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    })
  }
  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    
  
    setTimeout(() => {
     this.setState({
        sliding: false
      })
    }, 50)
  }
  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
  
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }


  render() { 
    const {title,children} = this.props
    return ( 
      <div>
      <h2>{ title }</h2>
      <div style={wrapper}>
        <div style={carouselContainer}>
          { children.map((child, index) => (
            <div style={carouselSlot}
              key={ index }
              order={ this.getOrder(index) }
            >
              {child}
            </div>
          )) }
        </div>
      </div>
    </div>
     );
  }
}

Carousel.propTypes = {
 title: PropTypes.string,
 children: PropTypes.node
}
 
export default Carousel;
