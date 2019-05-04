import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// App Components
import Header from './components/Header';
import apiKey from './components/Config';
import Gallery from './components/Gallery';
import Search from './components/Search';
import Nav from './components/Nav';
import PageError from './components/PageError';
import NotFound from './components/NotFound';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchResults: [],
      onStartPhotos: [],
      cats: [],
      cities: [],
      water: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchImages();
    this.fetchCats();
    this.fetchCities();
    this.fetchWater();
  }

  fetchImages = (query = 'cats%2C+cities%2C+water') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          onStartPhotos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  fetchCats = (query = 'cats') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  fetchCities = (query = 'cities') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cities: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  fetchWater = (query = 'water') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          water: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  fetchSearchResults = (query) => {
    this.setState({
      loading: true
    })
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          searchResults: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search fetchSearchResults={this.fetchSearchResults} />
          <Nav />

          <div className="photo-container">
          <h2>Results</h2>
          <br />

            <Switch>
              <Route exact path="/" render= { () => 
                <Redirect to="/home" /> } />

              <Route path="/home" render= { () =>
                (this.state.loading)
                ? <h3>Loading...</h3>
                : <Gallery photos={this.state.onStartPhotos} />
              } />
              
              <Route exact path="/cats" render= { () =>
                (this.state.loading)
                ? <h3>Loading...</h3>
                : <Gallery photos={this.state.cats} />
              } />

              <Route exact path="/cities" render= { () =>
                (this.state.loading)
                ? <h3>Loading...</h3>
                : <Gallery photos={this.state.cities} />
              } />

              <Route exact path="/water" render= { () =>
                (this.state.loading)
                ? <h3>Loading...</h3>
                : <Gallery photos={this.state.water} />
              } />

              <Route path="/gallery/:text" render= { () => {
                if (this.state.loading) {
                  return <h3>Loading...</h3>
                } else if (this.state.searchResults.length === 0) {
                  return <NotFound />
                } else {
                  return <Gallery photos={this.state.searchResults} /> 
                }
              }} /> 

              <Route component={PageError} />
            </Switch>
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
