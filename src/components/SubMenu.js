import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// justify-content-center align-items-center

class SubMenu extends Component {
  renderStyles() {
    const { params } = this.props;
    let class_name;
    if(params.submenuId ) class_name = "col-10" 
    if(params.contentId) class_name = "col-2"
    return class_name;
  }

  renderUser(submenuId) {
    const { users, params } = this.props;
    const user = users[params.submenuId];
    if (user) {
      return (
        <ul className="list-unstyled align-content-center">
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
      <Link to={`/${params.submenuId}`} className={`${this.renderStyles()} submenu`}>
          <h1 className='submenu-menu'>SubMenu</h1>
          {this.renderUser()}
      </Link>
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
