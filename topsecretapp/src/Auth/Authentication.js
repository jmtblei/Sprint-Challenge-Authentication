import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3300/api'; // process.env.REACT_APP_API_URL

axios.interceptors.request.use(
  function(requestConfig) {
    requestConfig.headers.authorization = localStorage.getItem('token');

    return requestConfig;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      const notLoggedIn = <h3>Login to view this page  </h3>;

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
