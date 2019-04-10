import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

import Address from './content-components/address';
import Company from './content-components/company';


class Content extends Component {
  renderStyles() {
    const {params} = this.props;
    let class_name;
    if(params.contentId) class_name = 'd-grid col-8'
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
const mapStateToProps = state => {
  return {
    users: state.users,
    params: state.params
  };
};
export default connect(
  mapStateToProps,
  null
)(Content);
