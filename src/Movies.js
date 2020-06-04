import React, {Component} from 'react';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";
import Moviebox from './Moviebox';
import ReactDOM from 'react-dom';
import './css/Movies.css';
import {db} from './config';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export class Movies extends Component{

    constructor(props){

        super(props);
        this.state = {
            deleted: "false",
            added: "false",
            lightbox: '',
            current_list: "All",
            search_term: '',
            total_count: '',
            current_count: '',
            list_options: [],
            movieArray: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.addLightbox = this.addLightbox.bind(this);
        this.removeLightbox = this.removeLightbox.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.getData = this.getData.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.checkLoad = this.checkLoad.bind(this);
    }

    componentDidMount(){
        const listdata = [];
        db.collection('Listnames').get().then(snapshot=>{
            snapshot.forEach(doc=>{
                listdata.push(doc.data().id);
                this.setState({
                    added: "true"
                })
            });
        })

        this.setState({
            list_options: listdata
        })

        this.getData();

    }

    getData(){
        document.getElementById('load').style.display = "none";
        console.log("mount");

        const moviedata = [];

        this.setState({
            total_count: 0,
            current_count: 16
        },
        function(){
            db.collection('movies').get().then(snapshot=>{
                snapshot.forEach(doc=>{
                    const docArray = doc.data().lists;
                    if(docArray.includes(this.state.current_list)){
                        moviedata.push(doc.data());
                        this.setState({
                        total_count: this.state.total_count+1
                        },this.checkLoad)
                    }
                    this.setState({
                        added: "true",
                    })
                });
            })
    
    
            this.setState({
                movieArray: moviedata,
            })
        }
        )


    }

    addLightbox(title, director, poster, rating, id, lists){
        console.log("in addlightbox");
        var newbox = React.createElement(
            Moviebox,
            {
                title: title,
                director: director,
                poster: poster,
                rating: rating,
                id: id,
                lists: lists,
                alllists: this.state.list_options,
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

    deleteMovie(id){
        console.log("deleting movie");
        const pass = this;
        db.collection('movies').doc(id).delete().then(function(){
            pass.getData();
        });
    }

    onSelect(option){
        this.setState({
            current_list: option.value,
        })
        this.getData();
    }

    handleChange(event){
        var newstate = {};
        newstate[event.target.id] = event.target.value;
        this.setState(newstate);
        console.log(newstate);
    }

    handleSearch(event){
        event.preventDefault();
        console.log("in handlesearch");
        const moviedata = [];
        if(this.state.search_term == ''){
            this.getData();
        }else{
            this.setState({
                total_count: 0,
                current_count: 16
            })
            db.collection('movies').get().then(snapshot=>{
                snapshot.forEach(doc=>{
                    const doctitle = doc.data().title;
                    if(doctitle == this.state.search_term){
                        moviedata.push(doc.data());
                        this.setState({
                            total_count: this.state.total_count+1
                        })
                    }
                    this.setState({
                        added: "true",
                    })
                });
            })
            this.setState({
                movieArray: moviedata,
            })
        }
        this.checkLoad();
    }

    handleLoad(){
        var currcount = this.state.current_count;
        var totalcount = this.state.total_count;
        if((totalcount - currcount) <= 8){
            this.setState({
                current_count: this.state.total_count
            }, this.checkLoad);
        }else{
            this.setState({
                current_count: this.state.current_count+8
            }, this.checkLoad);
        }
    }

    checkLoad(){
        console.log("current count:", this.state.current_count);
        console.log("total count:", this.state.total_count);
        if(this.state.current_count >= this.state.total_count){
            document.getElementById('load').style.display = "none";
            console.log("hiding");
        }else{
            document.getElementById('load').style.display = "block";
            console.log("displaying");
        }
        this.setState({
            deleted: "true"
        })
    }

    render(){
        var sliceamount = this.state.total_count;
        if(this.state.total_count > this.state.current_count){
            sliceamount = this.state.current_count;
        }
        var movieList = this.state.movieArray.slice(0, sliceamount).map((value, index)=>{
        var title = value.title;
        var director = value.director;
        var imdb = value.imdb;
        var poster = value.poster;
        var id = value.id;
        var lists = value.lists;
        return(
            <div className = "MovieItem">
                    <img key={index} src={poster} alt={title} className="MovieImg" onClick={()=>{this.addLightbox(title, director, poster, imdb, id, lists)}}></img>
            </div>
        )
    })

    return (
        <div>
        <div className="Lightbox" id="Lightbox">
        </div>
        <div className = "ListDiv">
            <Dropdown className="ListDrop" options={this.state.list_options} onChange={this.onSelect} value={this.state.current_list} placeholder="Select an option"/>
            <form className = "SearchForm" id = "SearchForm">
                <input type= "text" className="search_term" id= "search_term" name = "search_term" value = {this.state.search_term} onChange={this.handleChange}></input><br></br><br></br>
                <button className="search" id="search" type="search" onClick = {this.handleSearch}>Search</button>
            </form>
        </div>
        <div className = "MovieDiv">
            {movieList}
        </div>
        <div className = "LoadMoreDiv">
        <button className="load" id="load" type="load" onClick = {this.handleLoad}>Load More</button>
        </div>
        </div>
    );
  }
}
export default Movies;