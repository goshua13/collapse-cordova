import React, { Component } from "react";
import { connect } from "react-redux";
import { submenuAction } from "../actions";
import { Link } from "react-router-dom";
import history from "../history";

import Menu from "./Menu";

class SubMenu extends Component {
  renderStyles() {
    const { submenuId, menuId } = this.props;
    let class_name;
    // if (params.submenuId) class_name = "col-10";
    // if (params.contentId) class_name = "col-2"; 
    if(menuId) class_name = 'col-10'
    if(submenuId) class_name ='col-2'
    if(!submenuId) class_name ='col-10'
    class_name += " submenu";
    return class_name;
  }

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
        // <ul className="list-unstyled submenu-list">
        //   <Link to={`/${params.submenuId}/address`}>
        //     <li>{user.address.city}</li>
        //   </Link>
        //   <hr />
        //   <Link to={`/${params.submenuId}/company`}>
        //     <li>{user.company.name}</li>
        //   </Link>
        // </ul>
        <ul className="list-unstyled submenu-list">
          <li onClick={() => handleClickOne()}>{user.address.city}</li>
          <hr />
          <li onClick={() => handleClickTwo()}>{user.company.name}</li>
        </ul>
      );
    }
  }



  renderTitle() {
    return <div className="submenu-title" onClick={() => this.props.submenuAction(null)}>Sub-Menu</div>;
  }

  render() {
    console.log(this.props.match)
    const { users, menuId, params } = this.props;
    // const user = users[params.submenuId];
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
  const { params, menuId, submenuId } = id;
  return {
    submenuId,
    menuId,
    params,
    users
  };
};

export default connect(
  mapStateToProps,
  { submenuAction }
)(SubMenu);
