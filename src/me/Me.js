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
          <h1 className="pink-border-bottom about-me-title">MY STORY</h1>
          <p>
          <b>TL;DR:</b> I’m a Computer Science alumni from the University of Waterloo. I currently work as a software developer 👨‍💻 
          and also trying to get my hands dirty with art work 🖌️🎨 (photoshop, drawing, etc)!
          </p>

          <p>
          I initially started my post-secondary life pursuing a degree in Nanotechnology Engineering at the University of Waterloo. Most people tend to enjoy their first year, but for me it was quite the opposite.  What I was learning was unfulfilling, meeting deadlines was stressful, and mustering energy to meet and interact with new people was too mentally taxing, which ultimately lead to me failing my first year. 
          </p>

          <p>
          Normally this is where you’re expecting my story to get better, and it did, but at a price. I switched into computer science during my second year at Waterloo (having had to maintain a 70 average in the major first year CS courses in order to successfully switch). First and second year of University were, so far, the most stressful years that I’ve had to endure in my life. The mental impact that those two years had on me is difficult to put into words, and that’s the price I had to pay to be where I am today. 
          </p>

          <p>
          Persevering through the pain of those two years played a pivotal role in my life and shaped me to become who I am today. I learned humility through the realization that I really wasn’t better than anyone else just because I was in a prestigious program and university. I learned discipline through having to work both harder and smarter than most students in my program because of commuting to Waterloo from Milton while also working part-time. I learned through my various co-ops that my passion for Software Development is real and that I value the impact my code has on the real world. However, the most valuable thing I’ve learned from my time at UW is that life is really hard…no like actually it’s really really hard. But I’m able to live with that now that because of my past experiences I’m confident I now have the perseverance, passion, and ambition to take on any challenge that life throws at me.  

          At the end of the day I don’t look fondly upon my time at Waterloo, but I’ve finished my CS degree and am looking forward to my work life (currently at Shopify). Mainly because I hope to have time to pursue other creative outlets that I’m passionate about such as drawing and design work! 
          </p>

          <p>
          I have a lot more to say, but I don’t think my personal website is the right place to do so. If you’re a student (or really anyone) and want to know more about my journey please feel free to reach out to me (on any platform)! 
          </p>
        </div>
      </div>
    )
  }
}

export default Me;