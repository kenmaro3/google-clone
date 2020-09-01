import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            {/* home page (search page)*/}
            <Home />

            {/* result page*/}
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
