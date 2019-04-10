import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// justify-content-center align-items-center

class SubMenu extends Component {
  renderStyles() {
    const { params } = this.props;
    let class_name;
    if(params.submenuId ) class_name = "col-8" 
    if(params.contentId) class_name = "col-2"
    return class_name;
  }

  renderUser(submenuId) {
    const { users, params } = this.props;
    const user = users[params.submenuId];
    if (user) {
      return (
        <div className="list-unstyled align-content-center">
          <Link to={`/${params.submenuId}/address`}>
            <li>{user.address.city}</li>
          </Link>
          <hr />
          <Link to={`/${params.submenuId}/company`}>
            <li>{user.company.name}</li>
          </Link>
        </div>
      );
    }
  }

  render() {
    const { params } = this.props;
    return (
      <div className={`${this.renderStyles()} submenu`}>
        <Link to={`/${params.submenuId}`}>
          <h1 className='menus'>SubMenu</h1>
        </Link>
        {this.renderUser()}
      </div>
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
