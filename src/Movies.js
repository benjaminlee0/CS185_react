import React, {Component} from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import Moviebox from './Moviebox';
import ReactDOM from 'react-dom';
import './css/Movies.css';
import {db} from './config';

export class Movies extends Component{

    constructor(props){

        super(props);
        this.state = {
            added: "false",
            lightbox: '',
            current_list: "movieids",
            movieArray: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.addLightbox = this.addLightbox.bind(this);
        this.removeLightbox = this.removeLightbox.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        var data = [];
        const r0 = axios.get('https://www.omdbapi.com/?i=tt0816692&apikey=64551cfe');
        const r1 = axios.get('https://www.omdbapi.com/?i=tt3460252&apikey=64551cfe');
        const r2 = axios.get('https://www.omdbapi.com/?i=tt7131622&apikey=64551cfe');
        const r3 = axios.get('https://www.omdbapi.com/?i=tt0468569&apikey=64551cfe');
        const r4 = axios.get('https://www.omdbapi.com/?i=tt0080684&apikey=64551cfe');
        const r5 = axios.get('https://www.omdbapi.com/?i=tt1375666&apikey=64551cfe');
        const r6 = axios.get('https://www.omdbapi.com/?i=tt0075314&apikey=64551cfe');
        const r7 = axios.get('https://www.omdbapi.com/?i=tt0032599&apikey=64551cfe');

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

    getData(){
        // console.log(this.state.current_list);
        // const fetchdata = [];

        // db.collection(this.state.current_list).get().then(snapshot=>{
        //     snapshot.forEach(doc=>{
        //         const id = doc.data().id;
        //         const url = `https://www.omdbapi.com/?i=${id}&apikey=64551cfe`;
        //         const axiosquery = (url) => axios.get(url);
        //         console.log(axiosquery);
        //         fetchdata.push(axiosquery);
        //     });
        // })

        // const begin = this;

        // var moviedata = [];

        // axios.all(fetchdata).then(axios.spread((...responses)=>{
        //     console.log("in all");
        //     console.log(fetchdata);
        //     console.log(responses);
        //     responses.forEach(function(item){
        //         console.log("in for each");
        //         moviedata.push(item.data);
        //         begin.setState({
        //             added: "true"
        //         })
        //     })
        // }))

        // console.log(moviedata); 

        // this.setState({
        //     movieArray: moviedata
        // })

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
                handleClose: this.removeLightbox,
                handleDelete: this.deleteMovie
            }
        )
        var bod = document.getElementById("Lightbox");
        ReactDOM.render(newbox, bod);
        this.setState({
            lightbox: newbox
        })
    }

    removeLightbox(){
        ReactDOM.unmountComponentAtNode(document.getElementById("Lightbox"));
    }

    deleteMovie(){
        console.log("deleting movie");
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