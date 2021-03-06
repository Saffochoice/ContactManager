import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contact extends Component {

  render() {
    const { name, email, phone } = this.props
    return (
      <div className='card card-body mb-3'>
        <h4>{name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.defaultProps = {
  name: 'Unknown Name',
  email: 'Unknown Email',
  phone: 'Unknown Phone',
}
