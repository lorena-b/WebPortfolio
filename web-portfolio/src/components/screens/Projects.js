import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const TITLE = "Projects"

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>

    
      </div>
    )
  }
}