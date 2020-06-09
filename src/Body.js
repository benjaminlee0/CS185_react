import React, {Component} from 'react';
import Home from './Home'
import Baking from './Baking'
import Projects from './Projects'
import About from './About'
import Guestbook from './Guestbook'
import Movies from './Movies'
import AddMovie from './AddMovie'
import AddList from './Addlist'
import Graph from './Graph'
export class Body extends Component{

    displayContent = () =>{
        var activeTab = this.props.activeTab;
        console.log(activeTab);
        if(activeTab == "Home"){
            return <Home/>;
        }else if(activeTab == "Projects"){
            return <Projects/>;
        }else if(activeTab == "Baking"){
            return <Baking/>;
        }else if(activeTab == "About"){
            return <About/>;
        }else if(activeTab == "Guest Book"){
            return <Guestbook/>;
        }else if(activeTab == "Movies"){
            return <Movies/>;
        }else if(activeTab == "Add Movie"){
            return <AddMovie/>;
        }else if(activeTab == "Add List"){
            return <AddList/>
        }else if(activeTab == "Graph"){
            return <Graph/>
        }
    }

    render(){
        return (this.displayContent());
    }
}
export default Body;