import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <main id="main">
        <div className="container">
          <div id="avatar">
            <img src="img/pfp.png" alt="avatar" />
          </div>
          {/* Text Info */}
          <div className="info">
            <p></p>
            <h2 id="info-head">Hi, I'm Lorena!</h2>
            <h2 id="emoji"> 👋</h2>
            <br /><br /> I am experienced in both front-end and back-end development. 
            I am proficient in <code>Python</code> and <code>Java</code>. CONTINUE...
            <p />
          </div>
        </div>
       </main>        
      </div>
    )
  }
}