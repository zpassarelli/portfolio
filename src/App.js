import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Profile from './components/profile';
import Projects from './components/projects';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      category: '',
      profileAnim: '',
      projectAnim: '',

      leftCol: 'col-md-5 col-sm-6',
      rightCol: 'col-md-5 col-sm-6',

      leftHead: '',
      rightHead: ''
    }
  }

  showHome = () => {
    this.setState({
      profileAnim: 'fadeOut',
      projectAnim: 'fadeOut'
    }, ()=>{
      setTimeout(()=>{
        this.setState({
          category: '',
          leftCol: 'col-md-5 col-sm-6',
          rightCol: 'col-md-5 col-sm-6',
          leftHead: '',
          rightHead: ''
        });
      },10);
    })
  }

  showProfile = () => {
    this.setState({
      projectAnim: 'fadeOut'
    }, ()=>{
      setTimeout(()=>{
        this.setState({
          category: 'profile',
          profileAnim: 'fadeIn',
          leftCol: 'col-md-9 col-sm-11',
          rightCol: 'col-md-1 col-sm-1',
          leftHead: '',
          rightHead: 'vert'
        });
      },10);
    })
  }

  showProjects = () => {
    this.setState({
      profileAnim: 'fadeOut'
    }, ()=>{
      setTimeout(()=>{
        this.setState({
          category: 'projects',
          projectAnim: 'fadeIn',
          leftCol: 'col-md-1 col-sm-1',
          rightCol: 'col-md-9 col-sm-11',
          leftHead: 'vert',
          rightHead: ''
        });
      },10);
    })
  }

  render() {
    return (
      <div>

        <div className="fullscreen-bg">
          <video loop muted autoPlay className="fullscreen-bg__video">
              <source src={require('./media/out-b.mp4')} type="video/mp4" />
          </video>
        </div>

        <Grid>
          <Row className="animated slideInDown" style={{animationDelay: '2s'}}>
            <Col md={10} mdOffset={1} sm={12}>
              <h1 className="text shadebox action" onClick={()=>this.showHome()}>
                Welcome to Zach's Domain
              </h1>
            </Col>
          </Row>
          <Row className="animated zoomIn" style={{animationDelay: '1s'}}>
            <div className={this.state.leftCol + " col-md-offset-1 col-xs-12 slider"}>
              <div className="text shadebox tall action" onClick={()=>this.showProfile()}>
                <div className={'header rotate ' + this.state.leftHead}>Profile</div>
                <Profile anim={this.state.profileAnim} category={this.state.category} />
              </div>
            </div>
            <div className={this.state.rightCol + " col-xs-12 slider"}>
              <div className="text shadebox tall action" onClick={()=>this.showProjects()}>
                <div className={'header rotate ' + this.state.rightHead}>Projects</div>
                <Projects anim={this.state.projectAnim} category={this.state.category} />
              </div>
            </div>
          </Row>
          <Row className="animated slideInUp" style={{animationDelay: '2s'}}>
            <Col md={10} mdOffset={1} xs={12}>
              <h5 className="text shadebox">
                Built with React and Bootstrap.
                Background graphic courtesy of <a className="link" href="http://beeple-crap.com">beeple-crap</a>.
              </h5>
            </Col>
          </Row>
        </Grid>

      </div>
    )
  }
}
