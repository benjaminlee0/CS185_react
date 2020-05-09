import React, {Component} from 'react';
import './css/Guestform.css';
import {db} from './config';

export class Guestform extends Component{

    constructor(props){

        super(props);
        this.state = {
            name: '',
            bio: '',
            message: '',
            viewable: 'false',
            email: ''
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.postSubmit = this.postSubmit.bind(this);
    }


    handleChange(event){
        var newstate = {};
        newstate[event.target.id] = event.target.value;
        this.setState(newstate);
        console.log(newstate);
    }

    handleCheckbox(){
        if(this.state.viewable === "false"){
            this.setState({
                viewable: "true"
            })
        }else{
            this.setState({
                viewable: "false"
            })
        }
    }

    checkInput(){
        if(this.state.name.length <= 5){
            window.alert("Name must be longer than 5 characters.");
            return false;
        }else if(this.state.message.length <= 15){
            window.alert("Message must be longer than 15 characters.");
            return false;
        }
        return true;
    }

    handleSubmit(event){
        event.preventDefault();
        // console.log(this.state.viewable);
        if(this.checkInput() === false){
            return;
        }
        var privacy = "";
        if(this.state.viewable === "false"){
            privacy = "private";
        }else{
            privacy = "public";
        }
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
        var time = today.getHours() + ":";
        if(today.getMinutes() < 10){
            time += "0" + today.getMinutes();
        }else{
            time += today.getMinutes();
        }
        let data = {
            name: this.state.name,
            bio: this.state.bio,
            message: this.state.message,
            email: this.state.email,
            date: date,
            time: time
        }
        db.collection(privacy).doc(this.state.name).set(data);
        console.log("Submitted data");
        this.postSubmit();
    }

    postSubmit(){
        var form = document.getElementById("Form");
        form.reset();
        document.getElementById("viewable").checked = false;
        this.setState({
            viewable: "false"
        })
        window.alert("Message successfully submitted!");
        this.props.onSubmission();
        return;
    }

  render(){
    return (
        <div className = "Main">
            <form className = "Form" id = "Form">
                <label htmlFor = "name">Name</label><br></br>
                <input type= "text" className="name" id= "name" name = "name" value = {this.state.value} minLength="6" maxLength="19" onChange={this.handleChange}></input><br></br><br></br>
                <label htmlFor = "bio">About yourself</label><br></br>
                <textarea type = "text" id="bio" className="largeInput" name = "bio" value = {this.state.value} maxLength="99"onChange={this.handleChange}></textarea><br></br><br></br>
                <label htmlFor = "message">Leave a message!</label><br></br>
                <textarea type = "text" id="message" className="largeInput" name = "message" value = {this.state.value} minLength="16" maxLength="499"onChange={this.handleChange}></textarea><br></br><br></br>
                <label htmlFor = "viewable">Make public</label><br></br>
                <input type = "checkbox" id="viewable" name = "viewable" value = {this.state.viewable} onChange={this.handleCheckbox}></input><br></br><br></br>
                <label htmlFor = "email">Email</label><br></br>
                <input type = "email" id="email" className="email" name = "email" value = {this.state.value} onChange={this.handleChange}></input><br></br><br></br>
                <button className="submit" id="submit" type="submit" className="submit" onClick = {this.handleSubmit}>Submit</button>
            </form>
        </div>
    );
  }
}
export default Guestform;