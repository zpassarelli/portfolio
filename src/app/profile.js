import React, {Component} from 'react';

export default class Profile extends Component {
  constructor(props){
    super(props);

  }

  render() {
    if(this.props.category == 'profile'){
      return (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      )
    } else if(this.props.category == 'projects'){
      return (
        <div>
          noo
        </div>
      )
    } else {
      return (
        <div>
          its ya boi.
        </div>
      )
    }
  }
}
