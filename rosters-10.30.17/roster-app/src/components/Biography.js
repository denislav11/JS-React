import React, { Component } from 'react';
import Character from './Character';
import observer from '../utils/observer';

const characterBio = 'http://localhost:9999/character/';

class Biography extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            char: {}
        }

        this.viewBiography = ({ id }) => {
            this.setState({ id: id })
            this.getChar({ id });
        }

        this.getChar = ({ id }) => {
            fetch(characterBio + id)
                .then(response => {
                    response.json()
                        .then(responseJson => {
                            this.setState({
                                char: responseJson
                            });
                        })
                })
        }
    }

    componentDidMount() {
        observer.addFunc('viewBiography', this.viewBiography);
    }


    render() {
        let html;
        if (Object.keys(this.state.char).length !== 0) {
            html = (
                <fieldset>
                    {Character({ url: this.state.char.url })}
                    {this.state.char.name}
                    <div>
                        {this.state.char.bio}
                    </div>
                </fieldset>
            )
        };
        return (
            <div>
                {html}
            </div>
        )
    }
}

export default Biography;