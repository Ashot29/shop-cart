import './App.css';
import { useEffect } from 'react';
import { URL } from './url/url';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Cart from './components/cart/cart';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(props) {
  let { products, dispatch } = props;

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'GET_DATA', payload: { products: [...data] } }))
  }, [])
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

function mapStateToprops(state) {
  return {
    ...state
  }
}

export default connect(mapStateToprops)(App);
