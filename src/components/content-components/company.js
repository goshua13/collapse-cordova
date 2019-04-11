import React, { Component } from 'react'
import { connect } from 'react-redux';

class Company extends Component {
    renderCompany() {
        const { users, params } = this.props;
        const user = users[params.submenuId];
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
        <div>
            <h1 className='menus'>Company</h1>
            {this.renderCompany()}
            <h1 className='bruh'>orer otances occur in which toil and pain can procure him some great pleasuuences, or one w</h1>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        params: state.params
    }
}
export default connect(mapStateToProps, null)(Company);