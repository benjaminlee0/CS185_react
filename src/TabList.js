import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/Navbar.css';
import Tab from './Tab'

export class TabList extends Component{

    render(){
        return this.props.tabs.map((tabs) =>(
                <Tab tabs={tabs}
                changeTab={this.props.changeTab}
                activeTab={this.props.activeTab}/>
        ))
        //     <div>
        //         <div className="Nav">
        //             <ul className = "NavList">
        //                 <li><button onClick={this.handleChange("home")}>Home</button></li>
        //                 <li><button onClick={this.handleChange("projects")}>Projects</button></li>
        //                 <li><button onClick={this.handleChange("baking")}>Baking</button></li>
        //                 <li><button onClick={this.handleChange("about")}>About</button></li>
        //             </ul>
        //         </div>

        //         <div id="BodyDiv" className="BodyDiv">

        //         </div>
        // </div>
    }
}
export default TabList;