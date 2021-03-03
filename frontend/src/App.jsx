import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Quiz } from './pages/Quiz'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={ Quiz } exact path="/quiz"  />
        <Route component={HomePage} path='/' />
      </Switch>
    </div>
  );
}

export default App;
