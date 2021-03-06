import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListItem from '../components/list/ListItem';
import List from '../components/list/List';
import './App.css';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={List}/>
      <Switch>
        <Route path='/:title' component={ListItem} />
      </Switch>
    </Router>
  );
}
  