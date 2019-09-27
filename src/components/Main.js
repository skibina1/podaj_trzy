import React, { Component } from 'react';
import tracks from '../data/tracks.json';
import '../css/Main.css';

var tracksList = tracks.tracks;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threeTracksList: []
        }
    }

    pickThree() {
        //console.log(tracksList);
        const localThreeTracksList = [], usedNumber = [];
        let iter = 0;
        while (iter < 3) {
            const index = Math.floor(Math.random() * tracksList.length);
            if (usedNumber.includes(index)) {
                continue;
            } else {
                usedNumber.push(index);
            }
            localThreeTracksList.push(tracksList[index]);
            iter++;
        }
        //  console.log(localThreeTracksList);
        this.setState({
            threeTracksList: localThreeTracksList.slice()
        });
    }

    render() {
        const { threeTracksList } = this.state;

        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg" onClick={() => this.pickThree()} >Losuj tory</button>
                <div className="Main-margin">
                    {threeTracksList.length ? <div> {
                        threeTracksList.map((item) => (
                            <div className="Main-tracks">{item}</div>
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