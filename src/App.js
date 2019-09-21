import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Podaj trzy</h1>
              <Main></Main>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
