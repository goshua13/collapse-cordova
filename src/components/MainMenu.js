import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, mainMenuId, submenuAction } from "../actions";
import { Link } from "react-router-dom";
import history from '../history';

import Menu from "./Menu";

class MainMenu extends Component {
  // fetching users
  componentDidMount() {
    this.props.fetchUsers();
  }

  // rendering every user here
  renderUsers() {
    const { users } = this.props;  
    return users.map(user => {
      const handleClick = () => {
        this.props.mainMenuId(user.id)
        this.props.submenuAction(null)
        history.push(`/${user.id}`)
      }
      return (
        <li
          onClick={() => handleClick()}
          className="main-list"
          key={user.id}
        >
          {user.name}
        </li>
      );
    });
  }

  renderStyles() {
    const { menuId, submenuId } = this.props;
    let class_name = 'col-12';
    if(menuId == null && submenuId == null) class_name = "col-12";
    if (menuId) class_name = "col-2";
    class_name += " main-menu";
    return class_name;
  }
  handleTitleClick() {
    this.props.mainMenuId(null)
    this.props.submenuAction(null)
  }

  renderTitle() {
    return <div className="main-title" onClick={() => this.handleTitleClick()}>Main Menu</div>;
  }

  render() {
    return (
      <Menu
        link="/"
        style={this.renderStyles()}
        list={this.renderUsers()}
        title={this.renderTitle()}
      />
    );
  }
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { params, menuId } = id;
  return {
    menuId,
    params,
    users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers, mainMenuId, submenuAction }
)(MainMenu);
