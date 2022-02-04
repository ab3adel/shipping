import React from 'react';

import './App.css';

import {useRoutes} from 'react-router-dom'
import {HomeRoutes} from './tools/routes/homeroutes'
function App() {
  const routes = useRoutes(HomeRoutes)
  return (
    <div className="App">
     {routes}
    </div>
  );
}

export default App;
