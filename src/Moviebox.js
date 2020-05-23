import React, {Component} from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import './css/Moviebox.css';
import disableScroll from 'disable-scroll';

export class Moviebox extends Component{

    constructor(props){

        super(props);
        this.state = {
            poster: this.props.poster,
            title: this.props.title,
            director: this.props.director,
            rating: this.props.rating
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.clickClose = this.clickClose.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.deleteButton = this.deleteButton.bind(this);
    }

    componentDidMount(){
        // if(this.wrapperRef){
        //     document.body.style.overflow = 'hidden';
        // }
        disableScroll.on();
        document.addEventListener('mousedown', this.clickClose);
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
        this.props.handleDelete();
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
                </div>
            </div>
        </div>

    );
  }
}
export default Moviebox;