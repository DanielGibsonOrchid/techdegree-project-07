import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import SearchForm from './components/Header.js';

function App() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>React Gallery App - Project 7</h1>
          <p>This is a gallery search app</p>

          <SearchForm />
          <br/>
          <h2>Results</h2>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
