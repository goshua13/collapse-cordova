import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { paramsAction, mainMenuId } from "../actions";

import MainMenu from "../components/MainMenu";
import SubMenu from "../components/SubMenu";
import Content from "../components/Content";

class AppContainer extends Component {
  renderTiers() {
    const {menuId, submenuId} = this.props;
    let tiers;
    if(menuId == null && submenuId == null) tiers = 'tier-one'
    if(menuId != null) tiers = 'tier-two';
    if(submenuId) tiers= 'tier-three'
    // const { params } = this.props;
    // if (params.submenuId) tiers = "tier-two";
    // if (params.contentId) tiers = "tier-three";
    return tiers;
  }

  componentWillUpdate() {
    this.props.mainMenuId(this.props.match.params.submenuId)
  }
  render() {
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
  { paramsAction, mainMenuId }
)(AppContainer);
