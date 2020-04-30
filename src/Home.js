import React, {Component} from 'react';
import profile from './images/profile.jpg';
import './css/Home.css';
import {SRLWrapper} from "simple-react-lightbox";

export class Home extends Component{
  render(){
    return (
      <div>
          <div id = "lightbox"></div>

          <div className="DivHeader">
              <h1>Benjamin Lee</h1>
          </div>

        <div class="DivProfilePic">
            <SRLWrapper>
            <div>
                <img className="Profile" src={profile} alt="Benjamin Lee"></img>
            </div>
            </SRLWrapper>
            <div>
                <p><br></br>
                    Hello! My name is Benjamin Lee and I am currently in my second year at UC Santa Barbara with senior class standing.
                    I am a candidate for a B.S. in Computer Science and expect to graduate by June 2021.
                </p>
            </div>
        </div>
      </div>
    );
  }
}
export default Home;