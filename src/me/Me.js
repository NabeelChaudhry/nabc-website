import React from 'react';
import avatar from '../assets/final-avatar.png'

import './Me.css';

class Me extends React.Component {
  render() {
    return (
      <div className="me">
        <div className="avatar-container">
        <img src={avatar} alt="nabeels avatar" className="avatar"/>
        <table className="avatar-text">
          <tbody>
            <tr>
              <td className="pink-border-bottom">NABEEL CHAUDHRY</td>
            </tr>
            <tr>
              <td>Software Dev</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="about-me">
          <h1 className="pink-border-bottom about-me-title">About Me</h1>
          <p>
          I’m a Computer Science alumni from the University of Waterloo. I currently work as a software developer 👨‍💻 
          and also trying to get my hands dirty with art work 🖌️🎨 (photoshop, drawing, etc)!
          </p>
        </div>
      </div>
    )
  }
}

export default Me;