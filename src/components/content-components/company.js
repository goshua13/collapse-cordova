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
            <h1 className='bruh'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one w</h1>
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