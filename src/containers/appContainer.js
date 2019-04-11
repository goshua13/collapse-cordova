import React, { Component } from 'react'
import { Router, Route} from 'react-router-dom';
import history from '../history';
import { connect } from 'react-redux';
import { paramsAction } from '../actions';

import Menu from '../components/Menu';
import SubMenu from '../components/SubMenu';
import Content from '../components/Content';

class AppContainer extends Component {

  renderTiers() {
    let tiers = 'tier-one';
    const {params} = this.props;
    if(params.submenuId) tiers = 'tier-two';
    if(params.contentId) tiers = 'tier-three';
    console.log(tiers)
    return tiers
  }
  render() {
      this.props.paramsAction(this.props.match.params)
    return (
      <div className={`row text-center ${this.renderTiers()}`}>
          <Router history={history}>
            <Route path='/' component={Menu}/>
            <Route path='/:submenuId' component={SubMenu}/>
            <Route path='/:submenuId/:contentId' component={Content}/>
          </Router>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    params: state.params
  };
};


export default connect(mapStateToProps, {paramsAction}) (AppContainer);
