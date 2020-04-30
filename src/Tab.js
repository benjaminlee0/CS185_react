import React, {Component} from 'react';
import './css/Navbar.css';

export class Tab extends Component{

    addStyling = () => {
        if(this.props.tabs.title == this.props.activeTab){
            return {backgroundColor: 'rgb(61, 61, 151)'}
        }else{
            return {backgroundColor: ''}
        }
    }

    render(){
        return (
            <li><button style={this.addStyling()} onClick={this.props.changeTab.bind(this, this.props.tabs.title)}>{this.props.tabs.title}</button></li>
        )   
    }
}
export default Tab;