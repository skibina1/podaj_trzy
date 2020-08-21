import React, { Component } from 'react';
import '../css/Main.css';
import {pickThree} from '../util/utils'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threeTracksList: []
    }
  }

  pickTracks = () => {
    this.setState({
      threeTracksList: pickThree(this.props.tracks)
    })
  }

  render() {
    const { threeTracksList } = this.state;

    return (
      <div className="Main">
        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.pickTracks()} >Losuj tory</button>
        <div className="Main-margin">
          {threeTracksList.length ? <div> {
            threeTracksList.map((item, i) => (
              <div key={i} className="Main-tracks">{item}</div>
            ))} </div>
            :
            <div className="Main-tracks">Tutaj pojawią sie trzy wylosowane tory</div>
          }
        </div>
      </div>
    );
  }
}

export default Main;
