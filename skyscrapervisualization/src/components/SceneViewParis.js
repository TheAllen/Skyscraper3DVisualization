import React, {Component} from 'react';
import { SceneView, Scene, Layer, S } from 'react-sceneview';
import { Card, Button, CardText, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from "axios";

export default class SceneViewParis extends Component {

    constructor() {
        super();

        this.state = {
            name: "Louvre Musuem",
            city: "Paris",
            state: "New York",
            rating: 5,
            height: 1792,
            floors: 104,
            funFacts: "Notre Dame is known as The Old lady",
            cityIdentifier: "PARIS",
            cityMessage: "Paris is my favorite City"
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const inputInfo = {
            cityIdentifier: this.state.cityIdentifier,
            cityMessage: this.state.cityMessage,
            name: this.state.name,
            city: this.state.city,
            state: this.state.state,
            address: null,
            buildingDescription: this.state.buildingDescription,
            height: this.state.height,
            floors: this.state.floors,
            funFacts: this.state.cityMessage
        }

        axios.post('http://localhost:8080/api/skyscraper/', inputInfo)
        .this(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    onChange(e) {

    }

    render() {

    }
}