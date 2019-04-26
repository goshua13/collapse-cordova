import React, { Component } from 'react'
import { connect } from 'react-redux';

class Company extends Component {
    renderCompany() {
        const { users, menuId } = this.props;
        let user = users[menuId]
        if(user)
          return (
            <div>
              <h1>{user.company.name}</h1>
              <h5>{user.company.catchPhrase}</h5>
              <hr />
              <h4>{user.company.bs}</h4>
            </div>
          )
      }

  render() {
    return (
        <div className='container'>
            <h1 className='menus'>Company</h1>
            {this.renderCompany()}
            <h1 className='bruh'>orer otances occur in which toil arer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one rer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one rer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one rer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one rer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one rer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one nd pain can proccur rer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one rer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one rer otances occur in which toil and pain can proccur in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one in which toil and pain can procure him some occur in which toil and pain can procure him some occur in which toil and pain can procure him some ocure him some great pleasuuences, or one w</h1>
        </div>
    )
  }
}

const mapStateToProps = ({ menu, id }) => {
  const { users } = menu;
  const { params, menuId } = id;
  return {
    menuId,
    params,
    users
  };
};

export default connect(mapStateToProps, null)(Company);