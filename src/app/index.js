import React, { Component } from 'react';
import Content from './components/content';
import { Router } from 'react-router-dom';
import { history } from '../store';

export default class App extends Component {
  render() {
    return (
      <Router history={ history }>
        <Content key="content" />
      </Router>
    )
  }
}
