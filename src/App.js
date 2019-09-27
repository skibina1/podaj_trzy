import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Podaj Trzy</h1>
              <Main/>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
    );
  }
}

export default App;
