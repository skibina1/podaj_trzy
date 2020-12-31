import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main'
import Footer from './components/Footer';
import tracksPL from './data/tracks.json';
import tracksOFI from './data/tracksLO.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-style">Podaj Trzy</h1>
          <div className="row">
            <div className="col">
              <h1 className="text-style">Tory polskie</h1>
              <Main tracks={tracksPL.tracks}/>
            </div>
            <div className="col">
              <h1 className="text-style">Tory z ligi oficjalnej</h1>
              <Main tracks={tracksOFI.tracks}/>
            </div>            
          </div>                                    
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
