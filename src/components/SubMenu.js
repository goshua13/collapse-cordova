import React, { Component } from "react";
import { connect } from "react-redux";
import { submenuAction } from "../actions";

import Menu from "./Menu";

class SubMenu extends Component {
  renderStyles() {
    const { submenuUser, menuId } = this.props;
    let class_name;
    if (menuId) class_name = "col-10";
    if (submenuUser) class_name = "col-2";
    if (!submenuUser) class_name = "col-10";
    class_name += " submenu";
    return class_name;
  }

  // Here I had to have two individual click functions because each had its
  //  specific set of chars that it had to go to
  // in the future if it was an id Id only have one. could've done and if
  // statement also
  renderUser(user) {
    const { history, submenuAction, submenuUser} = this.props;
    if (user) {
      const handleClickOne = () => {
        submenuAction(user.address.city);
        history.push(`/${user.id}/${user.address.city}`);
      };
      const handleClickTwo = () => {
        submenuAction(user.company.name);
        history.push(`/${user.id}/${user.company.name}`);
      };
      // const highlightLink = () => {
      //   let color = 'text-info'
      //   if(submenuUser === user.company.name) color = 'text-success'
      //   return color;
      // }
      let color = 'text-info'
      let color2 = 'text-info'
      if(submenuUser === user.address.city) color = 'text-success'
      if(submenuUser === user.company.name) color2 = 'text-success'

      return (
        <ul className="list-unstyled">
          <li 
          className={`submenu-list ${color}`}
          onClick={() => handleClickOne()}>
            {user.address.city}
          </li>
          <hr />
          <li 
          className={`submenu-list ${color2}`}
          onClick={() => handleClickTwo()}>
            {user.company.name}
          </li>
        </ul>
      );
    }
  }

  // I just have a whole renderTitle function so that I can pass it in as a prop to the Menu componenet
  // There is a more efficient way though. maybe like passing it directly as the prop and doing the logic
  // in the prop.
  renderTitle() {
    return (
      <div
        className="submenu-title"
        onClick={() => this.props.submenuAction(null)}
      >
        Sub-Menu
      </div>
    );
  }

  render() {
    const { users, menuId } = this.props;
    const user = users[menuId];
    if (user) {
      return (
        <Menu
          link={`/${user.id}`}
          history={this.props.history}
          style={this.renderStyles()}
          title={this.renderTitle()}
          list={this.renderUser(user)}
        />
      );
    }
    return null;
  }
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { menuId, submenuUser } = id;
  return {
    submenuUser,
    menuId,
    users
  };
};

export default connect(
  mapStateToProps,
  { submenuAction }
)(SubMenu);
