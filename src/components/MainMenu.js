import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, mainMenuId } from "../actions";
import history from '../history';
import { Link } from "react-router-dom";

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
      return (
        // update the store with the user.id that the app state knows what user its on
        // <Link className='main-list' to={`/${user.id}`} key={user.id}>
        //   <li onClick={() => this.props.mainMenuId(user.id)} >{user.name}</li>
        // </Link>
        <li
          onClick={() => this.props.mainMenuId(user.id)}
          className="main-list"
          key={user.id}
        >
          {user.name}
        </li>
      );
    });
  }

  renderStyles() {
    const { menuId } = this.props;
    let class_name;
    if (menuId == null) class_name = "col-12";
    if (menuId) class_name = "col-2";
    // if (params) class_name = "col-12";
    // if (params.submenuId) class_name = "col-2";
    // if (params.contentId) class_name = "col-2";
    class_name += " main-menu";
    return class_name;
  }

  renderTitle() {
    return <div className="main-title">Main Menu</div>;
  }

  // use props to spit out each indivual stuff for the menus in each component
  // {/* show the active user from the redux store instead of Main menu using the user.id */}

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
  { fetchUsers, mainMenuId }
)(MainMenu);
