import React, {Component} from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import Moviebox from './Moviebox';
import ReactDOM from 'react-dom';
import './css/Movies.css';

export class Movies extends Component{

    constructor(props){

        super(props);
        this.state = {
            opt: {
                thumbnails: {
                    showThumbnails: "false"
                },
                settings: {
                    disableWheelControls: true
                },
                caption: {
                    captionColor: "red"
                }
            },
            added: "false",
            lightbox: '',
            movieArray: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.addLightbox = this.addLightbox.bind(this);
        this.removeLightbox = this.removeLightbox.bind(this);
    }

    componentDidMount(){
        var data = [];
        const r0 = axios.get('http://www.omdbapi.com/?i=tt0816692&apikey=64551cfe');
        const r1 = axios.get('http://www.omdbapi.com/?i=tt3460252&apikey=64551cfe');
        const r2 = axios.get('http://www.omdbapi.com/?i=tt7131622&apikey=64551cfe');
        const r3 = axios.get('http://www.omdbapi.com/?i=tt0468569&apikey=64551cfe');
        const r4 = axios.get('http://www.omdbapi.com/?i=tt0080684&apikey=64551cfe');
        const r5 = axios.get('http://www.omdbapi.com/?i=tt1375666&apikey=64551cfe');
        const r6 = axios.get('http://www.omdbapi.com/?i=tt0075314&apikey=64551cfe');
        const r7 = axios.get('http://www.omdbapi.com/?i=tt0032599&apikey=64551cfe');

        const begin = this;

        axios.all([r0,r1,r2,r3,r4,r5,r6,r7]).then(axios.spread((...responses)=>{
            responses.forEach(function(item){
                data.push(item.data);
                begin.setState({
                    added: "true"
                })
            })
        }))
        
        this.setState({
            movieArray: data
        })
    }

    addLightbox(title, director, poster, rating){
        console.log("in addlightbox");
        var newbox = React.createElement(
            Moviebox,
            {
                title: title,
                director: director,
                poster: poster,
                rating: rating,
                handleClose: this.removeLightbox
            }
        )
        var bod = document.getElementById("Lightbox");
        ReactDOM.render(newbox, bod);
        this.setState({
            lightbox: newbox
        })
    }

    removeLightbox(){
        console.log("in remove ligthobx");
        ReactDOM.unmountComponentAtNode(document.getElementById("Lightbox"));
    }

    render(){
        var movieList = this.state.movieArray.map((value, index)=>{
        var title = value.Title;
        var director = value.Director;
        var imdb = value.imdbRating;
        var poster = value.Poster;
        return(
            <div className = "MovieItem">
                    <img key={index} src={poster} alt={title} className="MovieImg" onClick={()=>{this.addLightbox(title, director, poster, imdb)}}></img>
            </div>
        )
    })

    return (
        <div>
        <div className="Lightbox" id="Lightbox">

        </div>
        <div className = "MovieDiv">
            {movieList}
        </div>
        </div>
    );
  }
}
export default Movies;