import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import  Home  from '../Components/Home/Home';
import SingleRun from '../Components/SingleRun/SingleRun';

class App extends Component {
  render() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className='container'>
                    <div className='row'>
                        <Switch>
                            <Route
                                path='/'
                                exact
                                component={Home}
                            />
                            <Route
                                path='/singleRun/:id'
                                component={SingleRun}
                            />
                        </Switch>
                    </div>
                </div>    
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
