import React, { Component } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';
import API from '../utils/API';

class OmdbContainer extends Component {
  state = {
    result: {},
    search: '',
  };

  // TODO: componentDidMount method needs to be fixed
  // Need to use 'this' keyword to reference to defined functions inside a class
  componentDidMount() {
    this.searchMovies('The Matrix'); //add leading 'this'
  }

  searchMovies = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  // TODO: handleInputChange method needs to be fixed
  handleInputChange = (event) => {
    // console.log(event.target.value);

    // add to set search text state in input form
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // TODO: handleFormSubmit method needs to call `this.searchMovies(this.state.search)`
  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.search);

    this.searchMovies(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size='md-8'>
            <Card
              heading={this.state.result.Title || 'Search for a Movie to Begin'}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size='md-4'>
            <Card heading='Search'>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
