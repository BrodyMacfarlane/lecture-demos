import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Detail from './components/Detail';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />         
    <Route path='/about' component={ About } />
    <Route path='/products/:id' component={ Detail }/>
    <Route path='/products' component={ Products } />
  </Switch>
)