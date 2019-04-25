import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, mainMenuId, submenuAction } from "../actions";


import Menu from "./Menu";

class MainMenu extends Component {

  state={active: false}
  // fetching users
  componentDidMount() {
    this.props.fetchUsers();
  }

  // rendering every user here
  renderUsers() {
    const { users } = this.props;  
    return users.map(user => {
      // This is what is helping update the redux store So then i can 
      // update the styling and the url
      const handleClick = () => {
        this.props.mainMenuId(user.id - 1)
        this.props.submenuAction(null)
        this.props.history.push(`/${user.id}`)
      }
      const highlightedLink = () => {
        let color = 'text-info'; 
        if(this.props.menuId+1 === user.id) color = 'text-success'
        return color
      }
  
      return (
        <li
          onClick={() => handleClick()}
          className={`menu-list ${highlightedLink()}`}
          key={user.id}
        >
          {user.name}
        </li>
      );
    });
  }
   renderStyles() {
    const { menuId, submenuId } = this.props;
    let class_name = 'col-12';
    if(menuId == null && submenuId == null) class_name = "col-12";
    if (menuId > -1) class_name = "col-2";
    class_name += " main-menu";
    return class_name;
  }

  // I had to update these as null so that in my styling I can
  // have easy styling in renderStyle()
  handleTitleClick() {
    this.props.mainMenuId(null)
    this.props.submenuAction(null)
  }
  title(){
    let title;
    if(window.innerWidth < 720){
      const id = this.props.users[this.props.menuId]
      if(id) title = id.name
    } 
    return title
  }
  renderTitle() {
    return <div className="main-title" onClick={() => this.handleTitleClick()}>{this.title()}</div>;
  }

  render() {
    return (
      <Menu
        link={`/`}
        history={this.props.history}
        style={this.renderStyles()}
        list={this.renderUsers()}
        title={this.renderTitle()}
      />
    );
  }
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { menuId } = id;
  return {
    menuId,
    users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers, mainMenuId, submenuAction }
)(MainMenu);
