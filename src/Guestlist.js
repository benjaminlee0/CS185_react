import React, {Component} from 'react';
import './css/Guestlist.css';
import {db} from './config';

export class Guestlist extends Component{

    constructor(props){

        super(props);
        this.state = {
            messageArray: []
        }


        this.componentDidMount = this.componentDidMount.bind(this);
        this.getData = this.getData.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate(){
        this.componentDidMount();
    }

    getData = () => {
        var data = [];
        db.collection('public').get().then(snapshot=>{
            snapshot.forEach(doc=>{
                data.push(doc.data());
            });
            this.setState({
                messageArray: data
            })
        })
    }


  render(){
    var messageList = this.state.messageArray.map((value, index)=>{
        var mname = value.name;
        var bio = value.bio;
        var message = value.message;
        var bio = "";
        if(value.bio){
            bio = value.bio;
        }
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var temp_date = value.date.split("-");
        var date = months[Number(temp_date[1]) - 1] + " " + temp_date[2] + ", " + temp_date[0];
        var timeString = value.time;
        var H = +timeString.substr(0, 2);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? "AM" : "PM";
        var timeString = h + timeString.substr(2, 3) + " " + ampm;
        var time = timeString;

        return(
            <div className = "ListItem">
                <h1 key={index} className="Name">{mname}</h1>
                <h2 key={index} className="Bio">{bio}</h2>
                <div className="MessageDiv">
                <p key={index} className="Message">{message}</p>
                <p key={index} className="Datetime">{date}, {time}</p>
                </div>
            </div>
        )
    })

    return (
        <div className = "MainList">
            {messageList}
        </div>
    );
  }
}
export default Guestlist;