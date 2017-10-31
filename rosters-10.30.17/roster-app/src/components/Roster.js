import React, { Component } from 'react';
import Character from './Character';
import Biography from './Biography';

import observer from '../utils/observer';

const getRosters = 'http://localhost:9999/roster';

class Roster extends Component {
    constructor() {
        super()

        this.state = {
            rosters: []
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch(getRosters);
            let responseJson = await response.json();
            this.setState({ rosters: responseJson });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className='roster'>
                {this.state.rosters.map((el, i) => {
                    return <span onClick={() => {
                        observer.applyFunc('viewBiography', { id: el.id })
                    }} key={i}>{Character({ url: el.url })}</span>
                })}
                <Biography />
            </div>
        )
    }
}

export default Roster;