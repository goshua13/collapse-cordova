import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Link } from "react-router-dom";

class Menu extends Component {
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
    if (params) class_name = "col-12 col-md-12";
    if (params.submenuId) class_name = "col-2";
    if (params.contentId) class_name = "col-2 col-md-2";
    return class_name;
  }

  render() {
    return (
      <Link to="/" className={`${this.renderStyles()} menu`}>
          <h1 className="main-menu">Main Menu</h1>
          <ul className="list-unstyled">{this.renderUsers()}</ul>
      </Link>
    );
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
)(Menu);
