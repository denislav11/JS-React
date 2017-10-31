import React, { Component } from 'react';

import '../App.css'

import Slider from './Slider';
import Roster from './Roster';

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Slider />
                <Roster />
            </div>
        )
    }
}

export default App;