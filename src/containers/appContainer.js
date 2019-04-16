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
    let tiers = "tier-one";
    if(this.props.menuId) tiers = 'tier-two';
    if (this.props.subMenuId) tiers = 'tier-three';
    // const { params } = this.props;
    // if (params.submenuId) tiers = "tier-two";
    // if (params.contentId) tiers = "tier-three";
    return tiers;
  }

  
  render() {
    const{paramsAction, menuId} = this.props;
    // paramsAction(this.props.match.params);
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
