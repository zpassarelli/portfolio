import React, {Component} from 'react';
import { Carousel, Glyphicon } from 'react-bootstrap';

import djzax from './media/djzax.png';
import pixelart from './media/pixelart.png';
import famhub from './media/famhub.png';
import rezact from './media/rezact.png';
import monb from './media/monb.png';

const INFO = {
  '0': {
    title: "ReZact Hunter",
    date: "Aug 2017",
    link: "http://rezact-hunter.surge.sh",
    description: "Reaction game mobile app designed to be easy to pick up and accessible to all skill groups.",
    tech: "JavaScript, React, React Native, JSX, CSS"
  },
  '1': {
    title: "FamilyHub",
    date: "Jul 2017",
    link: "http://familyhub.herokuapp.com",
    description: "Web app designed for household families to keep track of their busy lives.",
    tech: "JavaScript, React, JSX, CSS, Bootstrap, Node/Express, Socket.io"
  },
  '2': {
    title: "DJ-ZAX",
    date: "May 2017",
    link: "http://dj-zax.surge.sh",
    description: "Web app rhythm game.",
    tech: "JavaScript, jQuery, Canvas, HTML, CSS"
  },
  '3': {
    title: "Pixel Art Maker",
    date: "Apr 2017",
    link: "http://zp-pixel-art-maker.surge.sh",
    description: "Web app pixel art canvas.",
    tech: "JavaScript, HTML, CSS"
  },
  '4': {
    title: "Monster Battle",
    date: "Nov 2013",
    link: "https://github.com/zpassarelli/monster-battle",
    description: "Python shell reaction game.",
    tech: "Python 3, Pygame"
  }
}

export default class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: '0',
      anim: 'fadeIn'
    }
  }

  changeInfo = (e) => {
    this.setState({anim: 'fadeOut'}, ()=>{
      setTimeout(()=>this.setState({key: String(e), anim: 'fadeIn'}),100);
    })
  }

  render() {
    return (
      <div className={this.props.category == 'projects' ? "contain" : "preview-contain"}>
        {this.props.category == 'projects' ?(
          <Carousel
            interval={null}
            onSelect={(e)=>this.changeInfo(e)}
            nextIcon={<span className="icons">{">"}</span>}
            prevIcon={<span className="icons">{"<"}</span>}>
            <Carousel.Item>
              <img className="image" src={rezact} alt="ReZact Hunter" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src={famhub} alt="FamilyHub" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src={djzax} alt="DJ-ZAX" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src={pixelart} alt="Pixel Art Maker" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src={monb} alt="Monster Battle" />
            </Carousel.Item>
          </Carousel>
        ) : (
          <Carousel
            interval={null}
            controls={false}
            onSelect={(e)=>this.changeInfo(e)}
            indicators={false}
            nextLabel={null}
            prevLabel={null}>
            <Carousel.Item>
              <img className="image" src={rezact} alt="ReZact Hunter" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src={famhub} alt="FamilyHub" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src={djzax} alt="DJ-ZAX" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src={pixelart} alt="Pixel Art Maker" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src={monb} alt="Monster Battle" />
            </Carousel.Item>
          </Carousel>
        )}
        {this.props.category == 'projects' ? (
          <div className={"info animated " + this.state.anim}>
            <p style={{fontSize:'28px'}}>{INFO[this.state.key].title}</p>
            <p>{INFO[this.state.key].date}</p>
            <p>
              <a className="link" href={INFO[this.state.key].link}>Link to deployment</a>{" "}
            </p>
            <p>{INFO[this.state.key].description}</p>
            <p>Built with: {INFO[this.state.key].tech}</p>
          </div>
        ) : null}
      </div>
    )
  }
}
