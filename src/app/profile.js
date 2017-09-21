import React, {Component} from 'react';
import { Image } from 'react-bootstrap';

import zach from './media/zach.jpg'

export default class Profile extends Component {
  constructor(props){
    super(props);

  }

  render() {
    if(this.props.category == 'profile'){
      return (
        <div>
          <Image src={zach} alt="Zach's photo" responsive />
          This is me.
        </div>
      )
    } else if(this.props.category == 'projects'){
      return (
        null
      )
    } else {
      return (
        <Image src={zach} alt="Zach's photo" responsive />
      )
    }
  }
}
