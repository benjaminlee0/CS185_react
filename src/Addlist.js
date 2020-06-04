import React, {Component} from 'react';
import './css/Addlist.css';
import {db} from './config';
import axios from 'axios';

export class AddList extends Component{

    constructor(props){

        super(props);
        this.state = {
            id: ''
        }


        this.handleChange = this.handleChange.bind(this);
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


    checkInput(){
        // if(this.state.id.length != 9){
        //     window.alert("Please enter a valid IMDB id.");
        //     return false;
        // }
        return true;
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.checkInput() === false){
            return;
        }
        const id = this.state.id;
        const url = `https://www.omdbapi.com/?i=${id}&apikey=64551cfe`;
        axios.get(url).then(res => {
            const movie = res.data;
            console.log(movie);
            let data = {
                id: this.state.id,
            }
            db.collection('Listnames').doc(this.state.id).set(data);
            console.log("Submitted data");
            this.postSubmit();
        })
    }

    postSubmit=()=>{
        var form = document.getElementById("MovieForm");
        form.reset();
        window.alert("Message successfully submitted!");
        this.setState({
            id: ''
        })
        return;
    }

  render(){
    return (
        <div className = "MovieFormDiv">
            <h1 className="ListFormHeader">Add a movie list!</h1>
            <form className = "MovieForm" id = "MovieForm">
                <label className = "ListFormLabel">Enter list name:</label><br></br>
                <input type= "text" className="id" id= "id" name = "id" value = {this.state.id} onChange={this.handleChange}></input><br></br><br></br>
                <button className="add" id="add" type="add" className="add" onClick = {this.handleSubmit}>Add</button>
            </form>
        </div>
    );
  }
}
export default AddList;