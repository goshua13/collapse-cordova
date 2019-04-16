import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

import Address from './content-components/address';
import Company from './content-components/company';


class Content extends Component {
  renderStyles() {
    const {params, submenuId} = this.props;
    let class_name;
    // if(params.contentId) class_name = 'col-8'
    if(submenuId)  class_name = 'col-8'
    return class_name
  }
  
  render() {
    return (
      <div className={`${this.renderStyles()} content`}>
        <Route path='/:submenuId/address' component={Address}/>
        <Route path='/:submenuId/company' component={Company}/>
      </div>
    );
  }
}
const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { params, submenuId } = id;
  return {
    submenuId,
    params,
    users
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
