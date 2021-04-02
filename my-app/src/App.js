import './App.css';
import React from 'react'
import { TodoPage } from "./Pages/TodoPage"
import { Show } from './Pages/Show';
import {Date} from './Pages/timePage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="todo-list">
      <Router>
        <Switch>
          <Route exact path='/'>
          <TodoPage/>
          </Route>
          <Route path='/:id'>
          <Show/>
          </Route>
          <Route path='/date/:id'>
            <Show/>
          </Route>
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
