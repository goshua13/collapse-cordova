import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchUsers
} from "../actions";
import { Link } from 'react-router-dom';



class Menu extends Component {
  // fetching users
  componentDidMount() {
    this.props.fetchUsers();
  }
  // rendering every user here
  renderUsers() {
    const { users } = this.props;
    return users.map(user => {
      return (
        <Link to={`/${user.id}`} key={user.id}>
        <li>
          {user.name}
        </li>
        </Link>
      );
    });
  }

  renderStyles() {
    const {params} = this.props;
    let class_name;
    if(params) class_name = 'col-12 col-md-12 d-table'
    if(params.submenuId) class_name ='col-2 col-md-4 d-table'
    if(params.contentId) class_name = 'col-1 col-md-2 d-table'
    return class_name;
  }

  render() {
    return (
        <div className={`${this.renderStyles()} list-unstyled menu`}>
        <div className='d-table-cell'>
          <Link to='/'><h1 className='menus'>Main Menu</h1></Link>
          {this.renderUsers()}
          </div>
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
  { fetchUsers}
)(Menu);
