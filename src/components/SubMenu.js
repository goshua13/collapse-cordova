import React, { Component } from "react";
import { connect } from "react-redux";
import { submenuAction } from '../actions';
import { Link } from "react-router-dom";

import Menu from "./Menu";

class SubMenu extends Component {
  renderStyles() {
    const { submenuId } = this.props;
    let class_name = 'col-10';
    // if (params.submenuId) class_name = "col-10";
    // if (params.contentId) class_name = "col-2";
    if(submenuId !== null) class_name = 'col-2'
    class_name += " submenu";
    return class_name;
  }

  renderUser(user) {
    if (user) {
        return (
          // <ul className="list-unstyled submenu-list">
          //   <Link to={`/${params.submenuId}/address`}>
          //     <li>{user.address.city}</li>
          //   </Link>
          //   <hr />
          //   <Link to={`/${params.submenuId}/company`}>
          //     <li>{user.company.name}</li>
          //   </Link>
          // </ul>
          <ul className="list-unstyled submenu-list">
            <li onClick={() => this.props.submenuAction(user.address.city)}>{user.address.city}</li>
            <hr />
            <li onClick={() => this.props.submenuAction(user.company.name)}>{user.company.name}</li>
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
    console.log(this.props.submenuId)
    const { users, menuId, params } = this.props;
    // const user = users[params.submenuId];
    const user = users[menuId]
    return (
      <Menu
        link={`/${user}`}
        style={this.renderStyles()}
        title={this.renderTitle()}
        list={this.renderUser(user)}
      />
    );
  }
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { params, menuId,submenuId } = id;
  return {
    submenuId,
    menuId,
    params,
    users
  };
};

export default connect(
  mapStateToProps,
  {submenuAction}
)(SubMenu);
