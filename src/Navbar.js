import React, {Component} from 'react';
import './css/Navbar.css';
import TabList from './TabList';
import Body from './Body';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

export class Navbar extends Component{
    constructor(){
        super();
        this.state = {
          activeTab: "Home"
        }

        this.changeTab = (title) => {
            this.setState({
                activeTab: title
            })
        }
      }

    render(){
        const tabs = [
            {
              title: 'Home'
            },
            {
              title: 'Projects'
            },
            {
              title: 'Baking'
            },
            {
              title: 'About'
            },
            {
              title: 'Guest Book'
            }
          ]
        return(
            <div>
            <ul className = "NavList">
                <TabList tabs={tabs}
                changeTab={this.changeTab}
                activeTab={this.state.activeTab}/>
                </ul>
                <Body activeTab={this.state.activeTab}/>
                <ScrollUpButton/>
            </div>
        )
    }
}
export default Navbar;