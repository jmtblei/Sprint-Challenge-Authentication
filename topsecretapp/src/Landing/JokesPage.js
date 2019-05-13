import React from 'react';
import axios from 'axios';

import Auth from '../Auth/Authentication';

class JokesPage extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <>
        <h2>The jokes on you!</h2>
        <div>
          {this.state.jokes.map(j => (
            <div key={j.id}>
            <h4>{j.joke}</h4></div>
          ))}
        </div>
      </>
    );
  }

  componentDidMount() {
    const endpoint = '/jokes';
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default Auth(JokesPage);