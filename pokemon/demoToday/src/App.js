import React, { Component } from 'react';
import './App.css';

import SingUpForm from './components/form/SingUpForm';
import SignInForm from './components/form/SignInForm';
import PokemonForm from './components/form/PokemonForm';
import Pokemons from './components/Pokemons';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      token: ''
    }
  }

  render() {
    if (localStorage.getItem('authtoken') !== null) {
      return (
        <div>
          <h1>Logged</h1>
          <PokemonForm />
          <Pokemons />
        </div>
      )
    }
    return (
      <div>
        <SingUpForm />
        <SignInForm />
      </div>
    )
  }
}

export default App
