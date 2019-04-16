import React, { Component } from "react";
import { connect } from "react-redux";
import { submenuAction } from "../actions";
import history from "../history";

import Menu from "./Menu";

class SubMenu extends Component {
  renderStyles() {
    const { submenuId, menuId } = this.props;
    let class_name;
    if(menuId) class_name = 'col-10'
    if(submenuId) class_name ='col-2'
    if(!submenuId) class_name ='col-10'
    class_name += " submenu";
    return class_name;
  }

  // Here I had to have two individual click functions because each had its 
  //  specific set of chars that it had to go to
  // in the future if it was an id Id only have one. could've done and if 
  // statement also
  renderUser(user) {
    if (user) {
      const handleClickOne = () => {
        this.props.submenuAction(user.address.city);
        history.push(`/${user.id}/${user.address.city}`);
      };
      const handleClickTwo = () => {
        this.props.submenuAction(user.company.name);
        history.push(`/${user.id}/${user.company.name}`);
      };
      return (
        <ul className="list-unstyled submenu-list">
          <li onClick={() => handleClickOne()}>{user.address.city}</li>
          <hr />
          <li onClick={() => handleClickTwo()}>{user.company.name}</li>
        </ul>
      );
    }
  }


// I just have a whole renderTitle function so that I can pass it in as a prop to the Menu componenet
// There is a more efficient way though. maybe like passing it directly as the prop and doing the logic
// in the prop.
  renderTitle() {
    return <div className="submenu-title" onClick={() => this.props.submenuAction(null)}>Sub-Menu</div>;
  }

  render() {
    console.log(this.props.match)
    const { users, menuId } = this.props;
    const user = users[menuId];
    if(user) {
    return (
      <Menu
        link={`/${user.id}`}
        style={this.renderStyles()}
        title={this.renderTitle()}
        list={this.renderUser(user)}
      />
    );
  }return null
} 
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { menuId, submenuId } = id;
  return {
    submenuId,
    menuId,
    users
  };
};

export default connect(
  mapStateToProps,
  { submenuAction }
)(SubMenu);
