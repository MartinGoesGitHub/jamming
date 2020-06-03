import React from 'react';
import './App.css';
import { SearchBar } from './../SearchBar/SearchBar';
import { SearchResults } from './../SearchResults/SearchResults';
import { Playlist } from './../Playlist/Playlist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Twingo',
          artist: 'Fynn Kliemann',
          album: 'Twingo',
          id: '123'
        },
        {
          name: 'Coral Reef',
          artist: 'Slowheal',
          album: 'Coral',
          id: '1223'
        },
        {
          name: 'Man Must Dance',
          artist: 'Jonossi',
          album: 'Alub',
          id: '12312345'
        }
      ],
      playlistName: 'MyPlaylist',
      playlistTracks: [
        {
          name: 'Irgendwas',
          artist: 'Lewis',
          album: 'Zeit',
          id: '12309876'
        },
        {
          name: 'Ballermann',
          artist: 'Hansi Hans',
          album: 'Malle',
          id: '12232'
        },
        {
          name: 'Man Must Dance',
          artist: 'Jonossi',
          album: 'Alub',
          id: '12312345'
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  };

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks,})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({playlistTracks: tracks,})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name,})
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    return trackURIs

  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div >
    )
  }
}

export default App;
