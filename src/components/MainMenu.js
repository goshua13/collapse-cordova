import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, mainMenuId, submenuAction } from "../actions";

import Menu from "./Menu";

class MainMenu extends Component {
  state = { x: window.innerWidth };

  // fetching users
  componentDidMount() {
    this.props.fetchUsers();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ x: window.innerWidth });
  };

  // rendering every user here
  renderUsers() {
    const { users } = this.props;
    return users.map(user => {
      // This is what is helping update the redux store So then i can
      // update the styling and the url
      const handleClick = () => {
        this.props.mainMenuId(user.id - 1);
        this.props.submenuAction(null);
        this.props.history.push(`/${user.id}`);
      };
      const highlightedLink = () => {
        let color = "text-info";
        if (this.props.menuId + 1 === user.id) color = "text-success";
        return color;
      };
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

  // this is what is controlling the entire stytle of the main menu div
  renderStyles() {
    const { menuId, submenuId } = this.props;
    let class_name = "col-12";
    if (menuId == null && submenuId == null) class_name = "col-12";
    if (menuId > -1) class_name = "col-2";
    class_name += " main-menu";
    return class_name;
  }

  // I had to update these as null so that in my styling I can
  // have easy styling in renderStyle()
  handleTitleClick() {
    this.props.mainMenuId(null);
    this.props.submenuAction(null);
  }

  // All this is doing is getting the title to swtich depedning on if they 
  // are in the main menu or if the screen is below 720 which is the break point
  title() {
    let title;
    const id = this.props.users[this.props.menuId];
    if (this.state.x < 720 && this.props.menuId) if (id) title = id.name;
    if (this.state.x > 720 || !this.props.menuId) title = "Main menu";
    return title;
  }

  // simply rendering the main menu title here
  renderTitle() {
    return (
      <div className="main-title" onClick={() => this.handleTitleClick()}>
        {this.title()}
      </div>
    );
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
