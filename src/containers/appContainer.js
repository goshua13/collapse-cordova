import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { paramsAction, mainMenuId, submenuAction } from "../actions";

import MainMenu from "../components/MainMenu";
import SubMenu from "../components/SubMenu";
import Content from "../components/Content";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      localStorage.setItem("first_time", "1");
    }, 500);
  }

  renderTiers() {
    const { menuId, submenuUser } = this.props;
    let tiers = "tier-one";
    if (menuId > -1) tiers = "tier-two";
    if (submenuUser) tiers = "tier-three";
    return tiers;
  }

  // deeplinkload to take care of the first loads of the page on a deep link
  // deepLinkLoad() {
  //   let deep_link_load;
  //   if(this.state.first_load_complete && this.props.menuId) deep_link_load = 'deep-link-first-load'
  //   return deep_link_load
  // }
  deepLinkLoad() {
    let deep_link_load;
    var firstTime = localStorage.getItem("first_time");
    if (this.props.menuId > -1 && !firstTime) {
      deep_link_load = "deep-link-first-load";
    } else deep_link_load = "";
    return deep_link_load;
  }

  render() {
    // This is only for web. this is what is making it so that the redux store
    // is updated when you hit enter on the url or if you were
    // to share the link with somebody else it can direct you there.
    this.props.paramsAction(this.props.match.params);
    this.props.mainMenuId(this.props.params.submenuId);
    this.props.submenuAction(this.props.params.contentId);
    return (
      <div
        id="app-container"
        className={`row text-center ${this.renderTiers()} ${this.deepLinkLoad()} `}
      >
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
  const { params, menuId, submenuUser } = id;
  return {
    submenuUser,
    menuId,
    params,
    users
  };
};

export default connect(
  mapStateToProps,
  { paramsAction, mainMenuId, submenuAction }
)(AppContainer);
