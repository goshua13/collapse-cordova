import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Link } from "react-router-dom";

import Menu from './Menu';

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
        <Link to={`/${user.id}`} key={user.id}>
          <li>{user.name}</li>
        </Link>
      );
    });
  }

  renderStyles() {
    const { params } = this.props;
    let class_name;
    if (params) class_name = "col-12";
    if (params.submenuId) class_name = "col-2";
    if (params.contentId) class_name = "col-2";
    class_name += ' menu'
    return class_name;
  }
  renderCurrentUser() {
    const { users, params } = this.props;
    const user = users[params.submenuId];
    if(user) {
      return (
        <div>
          {user.name}
        </div>
      )
    }
  }

// override boostrap with width percentage
// use props to spit out each indivual stuff for the menus in each component
      // {/* show the active user from the redux store instead of Main menu using the user.id */}

  render() {
    return <Menu
          currentUser={this.renderCurrentUser()}
          link='/'
          style={this.renderStyles()}
          list={this.renderUsers()}
          title={['Main Menu', 'main-menu']}
          />
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    params: state.params
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(MainMenu);
