import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { paramsAction, mainMenuId, submenuAction } from "../actions";

import MainMenu from "../components/MainMenu";
import SubMenu from "../components/SubMenu";
import Content from "../components/Content";

class AppContainer extends Component {
  renderTiers() {
    const {menuId, submenuId} = this.props;
    let tiers ='tier-one';
    if(menuId == null && submenuId == null) tiers = 'tier-one'
    if(menuId) tiers = 'tier-two';
    if(submenuId) tiers= 'tier-three'
    return tiers;
  }

  render() {
    // This is only for web. this is what is making it so that the redux store
    // is updated when you hit enter on the url or if you were
    // to share the link with somebody else it can direct you there.
    this.props.paramsAction(this.props.match.params)
    this.props.mainMenuId(this.props.params.submenuId)
    this.props.submenuAction(this.props.params.contentId)
    return (
      <div className={`row text-center ${this.renderTiers()}`}>
        <Router history={history}>
          <Route path="/" component={MainMenu} />
          <Route path="/:submenuId" component={SubMenu} />
          <Route path="/:submenuId/:contentId" component={Content} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { params, menuId, submenuId } = id;
  return {
    submenuId,
    menuId,
    params,
    users
  };
};

export default connect(
  mapStateToProps,
  { paramsAction, mainMenuId, submenuAction }
)(AppContainer);
