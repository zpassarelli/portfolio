import React, {Component} from 'react';

import zach from '../media/zach.jpg'

export default class Profile extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className={this.props.category == 'profile' ? "contain" : "preview-contain"}>
        <img className="image" src={zach} alt="Zach's photo" />
        {this.props.category == 'profile' ? (
          <div className={"info animated " + this.props.anim}>
            <p style={{fontSize:'28px'}}>Zach Passarelli</p>
            <p>Software Developer</p>
            <p>
              <a className="link" href="https://linkedin.com/in/zpassarelli">LinkedIn</a>{" "}
              <a className="link" href="https://github.com/zpassarelli">Github</a>
            </p>
            <p>Coder, gamer, and creative mind who is passionate about technology, collaboration, and learning.
              Drop me a line on LinkedIn or Github.</p>
          </div>
        ) : null}
      </div>
    )
  }
}
