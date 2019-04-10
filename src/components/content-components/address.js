import React, { Component } from "react";
import { connect } from "react-redux";

class Address extends Component {
  renderAddress() {
    const { params, users } = this.props;
    let user = users[params.submenuId];
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
function mapStateToProps(state) {
  return {
    users: state.users,
    params: state.params
  };
}

export default connect(
  mapStateToProps,
  null
)(Address);
