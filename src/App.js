import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { MyComponentHome} from './MyComponentHome';
import { MyComponentStockManager} from './MyComponentStockManager';
import { MyComponentIceView} from './MyComponentIceView';

const navStyles = {
  width: '100%',
  height: '100px',
  color: 'white',
  
  backgroundColor: 'black',
  backgroundSize: 'contain'
    
  };

  

function App() {
  return (
    <div className="App">
      <header className="App-header"><link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
  />
      </header>

      <Router>
      <div>
        <nav style = {navStyles}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stockmanager">Stock Manager</Link>
            </li>
            <li>
              <Link to="/viewstock">View Stock</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/stockmanager">
            <MyComponentStockManager/>
          </Route>
          <Route path="/viewstock">
            <MyComponentIceView />
          </Route>
          <Route path="/">
            <MyComponentHome />
          </Route>
        </Switch>
      </div>
    </Router>

    

    
        
        

    </div>
  );
}



export default App;