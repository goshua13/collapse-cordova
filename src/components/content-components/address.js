import React, { Component } from "react";
import { connect } from "react-redux";

class Address extends Component {
  renderAddress() {
    const { params, users, menuId } = this.props;
    // let user = users[params.submenuId];
    let user = users[menuId]
    if (user)
      return (
        <div>
            <h1>{user.address.city}</h1>
            <h3>{user.address.street}</h3>
            <hr />
            <h4>{user.address.zipcode}</h4>
            <h3>{user.address.suite}</h3>
        </div>
      );
  }
  render() {
    return (
      <div>
        <h1 className="menus">Address</h1>
        {this.renderAddress()}
      </div>
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
  null
)(Address);
