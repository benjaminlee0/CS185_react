import React, {Component} from 'react';
import rideshare from './images/rideshare.PNG';
import './css/Projects.css';

export class Projects extends Component{
  render(){
    return (
      <div>
        <div className="Projects">

            <div className ="RideshareDiv">

                <div className="RideshareImage">
                    <a href="https://rideshare-139f7.firebaseapp.com/">
                    <img border="0" alt="Rideshare Application" src={rideshare} width="450" height="250"></img>
                    </a>
                </div>

                <div className="RideshareText">
                    <p>
                        <b>Rideshare Application</b> <br></br><br></br>
                        I along with a team of five other students designed a web application for the purpose of helping drivers and passengers coordinate
                        long-distance rideshare-style trips.<br></br><br></br> The application allows drivers the opportunity to post their rides to a consolidated database of
                        rides, which are displayed on a map. Drivers include information such as their planned departure time and destination, as well as any additional
                        details such as how much they are planning to charge. <br></br><br></br> Users searching for rides are able to access a map view of posted rides leaving from
                        their current location, and are provided filtering tools that allow them to find rides that most suit their needs.
                    </p>
                </div>
                

            </div>


        </div>
      </div>
    );
  }
}
export default Projects;