import React, {Component} from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";

export class Movies extends Component{

    constructor(props){

        super(props);
        this.state = {
            movieArray: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        console.log("in mount");
        var data = [];
        axios.get('http://www.omdbapi.com/?i=tt0816692&apikey=64551cfe').then(res => {
            const interstellar = res.data;
            data.push(interstellar);
            console.log(interstellar);
        })
        axios.get('http://www.omdbapi.com/?i=tt3460252&apikey=64551cfe').then(res => {
            const hatefuleight = res.data;
            data.push(hatefuleight);
        })
        axios.get('http://www.omdbapi.com/?i=tt7131622&apikey=64551cfe').then(res => {
            const hollywood = res.data;
            data.push(hollywood);
        })
        axios.get('http://www.omdbapi.com/?i=tt0468569&apikey=64551cfe').then(res => {
            const darkknight = res.data;
            data.push(darkknight);
        })
        axios.get('http://www.omdbapi.com/?i=tt0080684&apikey=64551cfe').then(res => {
            const empire = res.data;
            data.push(empire);
        })
        axios.get('http://www.omdbapi.com/?i=tt1375666&apikey=64551cfe').then(res => {
            const inception = res.data;
            data.push(inception);
        })
        axios.get('http://www.omdbapi.com/?i=tt0075314&apikey=64551cfe').then(res => {
            const taxi = res.data;
            data.push(taxi);
        })
        axios.get('http://www.omdbapi.com/?i=tt0032599&apikey=64551cfe').then(res => {
            const friday = res.data;
            data.push(friday);
        })
        this.setState({
            movieArray: data
        })
    }


    render(){
        console.log("before movie list");
        console.log(this.state.movieArray);
        var movieList = this.state.movieArray.map((value, index)=>{
        var title = value.Title;
        console.log("in movie list");
        var director = value.Director;
        var imdb = value.imdbRating;
        var poster = value.Poster;
        var caption = (title + "\n" + "Director: " + director + "\n" + "IMDB Rating: " + imdb);

        return(
            <div className = "MovieItem">
                    <img key={index} src={poster} alt={caption} className="MovieImg"></img>
            </div>
        )
    })

    console.log("rendered");

    return (
        <SRLWrapper>
        <div className = "MovieDiv">
            {movieList}
        </div>
        </SRLWrapper>
    );
  }
}
export default Movies;