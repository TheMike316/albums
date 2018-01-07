/* global fetch:false */
import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';
//import axios from 'axios'; issues with axios

class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(json => this.setState({ albums: json }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
      );
    }
}

export default AlbumList;
