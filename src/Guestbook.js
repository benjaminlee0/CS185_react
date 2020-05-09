import React, {Component} from 'react';
import Guestform from './Guestform.js';
import Guestlist from './Guestlist.js';
import './css/Guestbook.css';

export class Guestbook extends Component{
    constructor(props){

        super(props);
        this.state = {
            messageSent: 0,
        }

        this.handleSubmission = this.handleSubmission.bind(this);
        this.checkRender = this.checkRender.bind(this);
    }

    handleSubmission =()=> {
        this.setState({
            messageSent: (this.messageSent + 1)
        })
        console.log("detected submit");
    }

    checkRender(){
        if(this.state.messageSent > 0){
            return "yes";
        }else{
            return "no";
        }
    }

  render(){
    return (
      <div className="MainDiv">

        <div className="Guestform">
            <Guestform onSubmission={this.handleSubmission}/>

        </div>
        <div className="Guestlist">
            <Guestlist render={this.checkRender()}/>
        </div>

  </div>

    );
  }
}
export default Guestbook;