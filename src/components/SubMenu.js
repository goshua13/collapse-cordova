import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Menu from "./Menu";

class SubMenu extends Component {
  renderStyles() {
    const { params } = this.props;
    let class_name;
    if (params.submenuId) class_name = "col-10";
    if (params.contentId) class_name = "col-2";
    class_name += " submenu";
    return class_name;
  }

  renderUser(user, params) {
    if (user) {
        return (
          <ul className="list-unstyled submenu-list">
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

  renderTitle(user) {
    if(user) {
      return (
        <div className='submenu-title'>
          {user.name}
        </div>
      )
    } return <div className='submenu-title'>Sub-Menu</div>
  }

  render() {
    const { users, params } = this.props;
    const user = users[params.submenuId];
    return (
      <Menu
        link={`/${params.submenuId}`}
        style={this.renderStyles()}
        title={this.renderTitle()}
        list={this.renderUser(user, params)}
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
