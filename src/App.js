import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// App Components
import Header from './components/Header';
import apiKey from './Config';
import Gallery from './components/Gallery';
import Search from './components/Search';
import Nav from './components/Nav';
import PageError from './components/PageError';
import NotFound from './components/NotFound';

class App extends Component {

  //Set default state on App Startup
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

  //Call 4 fetch API functions - 1x Homepage, 3x Navigation menus
  componentDidMount() {
    this.fetchImages();
    this.fetchCats();
    this.fetchCities();
    this.fetchWater();
  }

  //Functions to fetch new photos from Flickr using axios fetch API
  //First function is on App Startup - Fetches images with combined search text equal to "Cats + Cities + Water"
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

  //Three Functions - one for each navigation menu button
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

  //Function for search query - Passed through to Search component
  fetchSearchResults = (query) => {
    //Set loading text to appear while API function fetches images
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

  //Render using React Router
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
                //If Loading is set to true then add text, else load Gallery photos
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

              {/* Search results display unique URL - If no results then returns NoFound component */}
              <Route path="/gallery/:text" render= { () => {
                if (this.state.loading) {
                  return <h3>Loading...</h3>
                } else if (this.state.searchResults.length === 0) {
                  return <NotFound />
                } else {
                  return <Gallery photos={this.state.searchResults} /> 
                }
              }} /> 

              {/* If URL is not found - Display 404 error message with PageError component */}
              <Route component={PageError} />
            </Switch>
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
