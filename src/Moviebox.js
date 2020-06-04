import React, {Component} from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import './css/Moviebox.css';
import disableScroll from 'disable-scroll';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {db} from './config';

export class Moviebox extends Component{

    constructor(props){

        super(props);
        this.state = {
            poster: this.props.poster,
            title: this.props.title,
            director: this.props.director,
            rating: this.props.rating,
            id: this.props.id,
            lists: this.props.lists,
            alllists: this.props.alllists,
            options: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.deleteButton = this.deleteButton.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount(){
        // if(this.wrapperRef){
        //     document.body.style.overflow = 'hidden';
        // }
        disableScroll.on();
        document.addEventListener('mousedown', this.clickClose);
        const optionarr = [];

        const mylists = this.state.lists;
        this.state.alllists.forEach(function(element){
            if(!mylists.includes(element)){
                optionarr.push(element);
            }
        })

        this.setState({
            options: optionarr
        })
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.clickClose);
        //document.body.style.overflow = '';
        disableScroll.off();
    }

    setWrapperRef(node){
        this.wrapperRef = node;
    }

    clickClose(event){
        if(this.wrapperRef &&!this.wrapperRef.contains(event.target)){
            this.props.handleClose();
            console.log("handling close");
        }
    }

    deleteButton(){
        console.log("delete clicked");
        this.props.handleClose();
        this.props.handleDelete(this.state.id);
    }

    onSelect(option){
        console.log('Selected', option.value);
        const updatedarr = this.state.lists;
        updatedarr.push(option.value);
        db.collection('movies').doc(this.state.id).update({
            "lists": updatedarr
        })
    }


    render(){

    return (
        <div className = "Modal" id="Modal">
            <div className = "Content" ref={this.setWrapperRef}>
                <div className="Poster">
                    <img src={this.state.poster} className="MovieboxImg" id="poster"></img>
                </div>
                <div className = "Text">
                    <h1 className="Title">{this.state.title}</h1>
                    <h2 className="Director">{this.state.director}</h2>
                    <p className="Rating">{this.state.rating} on IMDB</p>
                    <button onClick={this.deleteButton} className="MovieDeleteButton">Remove Movie</button>
                    <Dropdown className="MovieboxDrop" options={this.state.options} onChange={this.onSelect} placeholder="Select a list"/>
                </div>
            </div>
        </div>

    );
  }
}
export default Moviebox;