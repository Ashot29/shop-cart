import './App.css';
import { useEffect, useState } from 'react';
import store from './stateManagement/store';
import { URL } from './url/url';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import { connect } from 'react-redux';

function App(props) {
  let { products, dispatch } = props

  useEffect(() => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => dispatch({type: 'GET_DATA', payload: {products: [...data]}}))
  }, [])

  console.log(props, 'props App')
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

function mapStateToprops(state) {
  return {
    products: [...state.products]
  }
}

export default connect(mapStateToprops)(App);
