import React, {Component} from 'react';
import Navbar from './Navbar';
import SimpleReactLightbox from "simple-react-lightbox";

export class App extends Component{



  render(){
    return (
      <div>
        <SimpleReactLightbox>
        <Navbar/>
        </SimpleReactLightbox>
      </div>


    );
  }
}
export default App;