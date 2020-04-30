import React, {Component} from 'react';
import aboutpic from './images/aboutpic.PNG';
import './css/About.css';

export class About extends Component{
  render(){
    return (
      <div className="MainDiv">

      <div className="LinkDiv">

          <div className="Thanks">
              <p>
                  <br></br><br></br><br></br>
                  Thank you for visiting my website! <br></br> Here are some links to get to know me better.

              </p>
          </div>

          <div className="Links">
              <a href="https://github.com/benjaminlee0">Github</a> <br></br><br></br>
              <a href="https://www.linkedin.com/in/benjamin-lee-85595a145/">LinkedIn</a><br></br><br></br>
              <a href="https://www.facebook.com/profile.php?id=100012241235191">Facebook</a><br></br><br></br>
              <br></br><br></br><br></br><br></br>
          </div>

          <div className="Song">
              <p>
                  My favorite song:
              </p>
              <iframe width="420" height="315"
              src="https://www.youtube.com/embed/Dw1ZC6sZjIY">
              </iframe>
          </div>

      </div>


      <div className="ImageDiv">

          <img className="Pic" src={aboutpic}></img>

      </div>


  </div>

    );
  }
}
export default About;