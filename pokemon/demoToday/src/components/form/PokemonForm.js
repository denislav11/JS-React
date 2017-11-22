import React, { Component } from 'react';
import Input from './formFields/Input';

const pokemonUrl = 'http://localhost:5000/pokedex/create';

class PokemonForm extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            name: '',
            image: '',
            info: ''
        });

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmit(e) {
        e.preventDefault();
        let payload = {
            pokemonName: this.state.name,
            pokemonImg: this.state.image,
            pokemonInfo: this.state.info
        };

        try {
            let response = await fetch(pokemonUrl, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(payload)
            });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        let nameValid = this.state.name !== '';
        let imageValid = this.state.image !== '';
        let infoValid = this.state.info !== '';

        let btn;
        if (nameValid && imageValid && infoValid) {
            btn = <input type="submit" value="Create Pokemon" />
        }

        return (
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <Input
                        name="Pokemon Name"
                        data="name"
                        func={this.onChange}
                        type="text"
                        valid={nameValid}
                    />
                    <Input
                        name="Pokemon Image"
                        data="image"
                        func={this.onChange}
                        type="text"
                        valid={imageValid}
                    />
                    <Input
                        name="Pokemon Info"
                        data="info"
                        func={this.onChange}
                        type="text"
                        valid={infoValid}
                    />
                    {btn}
                </fieldset>
            </form>
        )
    }
}

export default PokemonForm;