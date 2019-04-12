import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Menu from './Menu';


class SubMenu extends Component {
  renderStyles() {
    const { params } = this.props;
    let class_name;
    if (params.submenuId) class_name = "col-10";
    if (params.contentId) class_name = "col-2";
    class_name += ' submenu'
    return class_name;
  }

  renderUser() {
    const { users, params } = this.props;
    const user = users[params.submenuId];
    if (user) {
      return (
        <ul className="list-unstyled">
          <Link to={`/${params.submenuId}/address`}>
            <li>{user.address.city}</li>
          </Link>
          <hr />
          <Link to={`/${params.submenuId}/company`}>
            <li>{user.company.name}</li>
          </Link>
        </ul>
      );
    }
  }

  render() {
    const { params } = this.props;
    return (
      <Menu
        link={`/${params.submenuId}`}
        style={this.renderStyles()}
        title={["SubMenu", "submenu-menu"]}
        list={this.renderUser()}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    params: state.params
  };
}

export default connect(
  mapStateToProps,
  null
)(SubMenu);
