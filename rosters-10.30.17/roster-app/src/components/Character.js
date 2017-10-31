import React, { Component } from 'react';
import '../Character.css';

let Character = (props) => {
    return (<img className="character" src={props.url} />);
}

export default Character; 