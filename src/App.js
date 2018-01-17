import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from './actions';

class App extends Component {

  componentWillMount() {
    this.props.moviesList();
  }

  /// comes in as null
  // check if movies is null or not!
  renderList = (movies) => {
    if (movies) {
      return movies.map((movie, i) => {
        return (
          <div key={i}>{movie.name}</div>
        )
      });
    }
  }

  render() {
    return (
      <div>
        {this.renderList(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  return {
    movies: state.movies
  }
}

//export default App;
export default connect(mapStateToProps, actions)(App);
