import React, { Component } from 'react'
import { Router, Route} from 'react-router-dom';
import history from '../history';
import { connect } from 'react-redux';
import { paramsAction, fetchUsers } from '../actions';

import Menu from '../components/Menu';
import SubMenu from '../components/SubMenu';
import Content from '../components/Content';

class AppContainer extends Component {
  render() {
      this.props.paramsAction(this.props.match.params)
    return (
      <div className='row text-center'>
          <Router history={history}>
            <Route path='/' component={Menu}/>
            <Route path='/:submenuId' component={SubMenu}/>
            <Route path='/:submenuId/:contentId' component={Content}/>
          </Router>
      </div>
    )
  }
}

export default connect(null, {paramsAction, fetchUsers}) (AppContainer);
