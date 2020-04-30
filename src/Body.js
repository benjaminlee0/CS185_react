import React, {Component} from 'react';
import Home from './Home'
import Baking from './Baking'
import Projects from './Projects'
import About from './About'

export class Body extends Component{

    displayContent = () =>{
        var activeTab = this.props.activeTab
        if(activeTab == "Home"){
            return <Home/>;
        }else if(activeTab == "Projects"){
            return <Projects/>;
        }else if(activeTab == "Baking"){
            return <Baking/>;
        }else{
            return <About/>;
        }
    }

    render(){
        return (this.displayContent());
    }
}
export default Body;