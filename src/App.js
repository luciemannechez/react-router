import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,NavLink,Link} from 'react-router-dom'
import {Home} from "./routes/Home";
import {Contact} from "./routes/Contact";
import {About} from "./routes/About";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Header</h1>
            </header>
              <nav>
                  <NavLink to="/home" activeStyle={{
                      fontWeight: 'bold',
                      color: 'red'
                  }}>Home</NavLink>
                  <NavLink to="/about" activeStyle={{
                      fontWeight: 'bold',
                      color: 'red'
                  }}>About</NavLink>
                  <NavLink to="/contact" activeStyle={{
                      fontWeight: 'bold',
                      color: 'red'
                  }}>Contact</NavLink>
              </nav>
              <div>
                  <Switch>
                      <Route exact path="/home" component={Home}/>
                      <Route path="/contact" component={Contact}/>
                      <Route path="/about" component={About}/>
                  </Switch>
              </div>
              <footer>
                  <h1>Footer</h1>
                  <Link to="/about">About</Link>
              </footer>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
