import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

import Address from './content-components/address';
import Company from './content-components/company';


class Content extends Component {
  renderStyles() {
    const { submenuId} = this.props;
    let class_name;
    // if(params.contentId) class_name = 'col-8'
    if(submenuId)  class_name = 'col-8'
    return class_name
  }
  
  render() {
    const { users, menuId } = this.props;
    const user = users[menuId]
    if(user){
    return (
      <div className={`${this.renderStyles()} content`}>
        <Route path={`/:submenuId/${user.address.city}`} component={Address}/>
        <Route path={`/:submenuId/${user.company.name}`} component={Company}/>
      </div>
    );
  } return null
}
}
const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { params, submenuId, menuId } = id;
  return {
    menuId,
    submenuId,
    params,
    users
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
