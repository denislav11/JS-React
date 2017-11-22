import React, { Component } from 'react';
import PokemonField from './form/formFields/PokemonField';
const pokemonsUrl = 'http://localhost:5000/pokedex/pokedex';

class Pokemons extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            pokemons: []
        });
    }
    componentDidMount() {
        this.getAllPokemons();
    }

    async getAllPokemons() {
        let response = await fetch(pokemonsUrl);
        let respnseJson = await response.json();
        this.setState({
            pokemons: respnseJson.pokemonColection
        })
    }

    render() {
        return (
            <div>
                {this.state.pokemons.map((el, i) => {
                    return <PokemonField data={el} key={i} />
                })}
            </div>
        )
    }
}

export default Pokemons;