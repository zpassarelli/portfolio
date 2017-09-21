import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';

import djzax from './media/djzax.png';
import pixelart from './media/pixelart.png';
import famhub from './media/famhub.png';
import rezact from './media/rezact.png';

export default class Projects extends Component {
  constructor(props){
    super(props);

  }

  render() {
    if(this.props.category == 'projects'){
      return (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      )
    } else if(this.props.category == 'profile'){
      return (
        null
      )
    } else {
      return (
        <Carousel
          controls={false}
          indicators={false}
          nextLabel={null}
          prevLabel={null}
          pauseOnHover={false}>
          <Carousel.Item>
            <img src={rezact} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={famhub} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={djzax} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={pixelart} />
          </Carousel.Item>
        </Carousel>
      )
    }
  }
}
