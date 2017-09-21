import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Profile from './profile';
import Projects from './projects';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      category: '',

      leftCol: 'col-md-5',
      rightCol: 'col-md-5',

      leftHead: '',
      rightHead: ''
    }
  }

  changeCategory = (category) => {
    if(category == 'profile'){
      this.setState({
        category: 'profile',
        leftCol: 'col-md-9',
        rightCol: 'col-md-1',
        leftHead: '',
        rightHead: 'vert'
      });
    } else if(category == 'projects'){
      this.setState({
        category: 'projects',
        leftCol: 'col-md-1',
        rightCol: 'col-md-9',
        leftHead: 'vert',
        rightHead: ''
      });
    } else {
      this.setState({
        category: '',
        leftCol: 'col-md-5',
        rightCol: 'col-md-5',
        leftHead: '',
        rightHead: ''
      });
    }
  }

  render() {
    return (
      <div>

        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
              <source src="media/out-b.mp4" type="video/mp4" />
          </video>
        </div>

        <Grid>
          <Row className="animated slideInDown" style={{animationDelay: '3s'}}>
            <Col md={10} mdOffset={1} xs={12}>
              <h1 className="text shadebox action" onClick={()=>this.changeCategory('')}>
                Welcome to Zach's Domain
              </h1>
            </Col>
          </Row>
          <Row className="animated zoomIn" style={{animationDelay: '2s'}}>
            <div className={this.state.leftCol + " col-md-offset-1 slide"}>
              <div className="text shadebox tall action" onClick={()=>this.changeCategory('profile')}>
                <div className={'header rotate ' + this.state.leftHead}>Profile</div>
                <Profile category={this.state.category} />
              </div>
            </div>
            <div className={this.state.rightCol + " slide"}>
              <div className="text shadebox tall action" onClick={()=>this.changeCategory('projects')}>
                <div className={'header rotate ' + this.state.rightHead}>Projects</div>
                <Projects category={this.state.category} />
              </div>
            </div>
          </Row>
          <Row className="animated slideInUp" style={{animationDelay: '3s'}}>
            <Col md={10} mdOffset={1} xs={12}>
              <h5 className="text shadebox">
                Built with React and Bootstrap.
                Background graphic courtesy of <a href="http://beeple-crap.com">beeple-crap</a>.
              </h5>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
