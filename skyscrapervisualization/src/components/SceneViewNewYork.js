import React, { Component } from 'react';
import { SceneView, Scene, Layer, S } from 'react-sceneview';
import { Card, Button, CardText, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';

import { createMessage } from '../Actions/messageAction';

import axios from "axios";

const ID = 'a0f52995be7d42c1ba9a2b570570feb5' //Original NY
const IDNY = '9a542f6755274436985617a462ffdf44'
const NY_EXAMPLE = 'd50983f1314141bfb6d57c6f83f2690e'
const IDNY1 = '6da5b4a4f0214f83963bd3620bea376d' //New York
const ID_PARIS = '0614ea1f9dd043e9ba157b9c20d3c538' //Paris
const ID_GENEVA = 'c6f90b19164c4283884361005faea852'
const ID_LUCERNE = '6043821c854345e4b6d56c9b0765079d'
const ID_LYON = 'ba138a72546a46faa94983a4f0eceb95'

export class SceneViewNewYork extends Component {

    constructor() {
        super();

        this.state = {
            cityIdentifier: "New York",
            cityMessage: "New York is my favorite City",
            id: 1,
            name: "One World Trade Center",
            city: "New York City",
            state: "New York",
            address: null,
            buildingDescription: null,
            height: 0,
            floors: 0,
            funFacts: ""
        }

        //this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {

    } 


    onSubmit = (e) => {
        e.preventDefault();
        const newBuilding = {
            cityIdentifier: "New York",
            cityMessage: "New York is my favorite City(Edit 1)",
            name: "One World Trade Center",
            city: "New York City",
            state: "New York",
            address: null,
            buildingDescription: null,
            height: 1792,
            floors: 104,
            funFacts: "One World Trade Center is the main building of the rebuilt World Trade Center complex in Lower Manhattan, New York City"
        }
        // createMessage(newBuilding, this.props.history);

        axios.post('http://localhost:8080/api/skyscraper/', newBuilding)
            .then(res => {
                console.log(res);
                this.history.push("/");
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    render() {
        return (
            <div className="App">
                <SceneView id="newyork">
                    <Scene portalItem={{ id: IDNY }}>

                    </Scene>
                </SceneView>

                <Card body className="city-message-form">
                    <CardTitle>A 3D View of Manhattan! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                    <Button onClick={this.onSubmit}>Submit</Button>
                    {/* Form */}
                    <Form >
                        <FormGroup className="cityMessage">
                            <Label for="exampleText">Description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Form>
                </Card>

            </div>

        )
    }
}

export class SceneViewParis extends Component {

    constructor() {
        super();
    }

    onSubmit(e) {
        e.preventDefault();
        const newBuilding = {
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
        // createMessage(newBuilding, this.props.history);

        axios.post('http://localhost:8080/api/skyscraper/', newBuilding)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    render() {
        return (
            <div className="App">
                <SceneView id="paris">
                    <Scene portalItem={{ id: ID_PARIS }}></Scene>
                </SceneView>

                <Card body className="city-message-form">
                    <CardTitle>A 3D View of Paris! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                    <Button onClick={this.onSubmit}>Submit</Button>
                </Card>

                <Form>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export class SceneViewGeneva extends Component {
    render() {
        return (
            <div>
                <SceneView id="geneva">
                    <Scene portalItem={{ id: ID_GENEVA }}></Scene>
                </SceneView>

                <Card body className="city-message-form">
                    <CardTitle>A 3D View of Geneva! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                    <Button>Submit</Button>
                </Card>

                <Form>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export class SceneViewLucerne extends Component {

    constructor() {
        super();
    }

    onSubmit(e) {

    }


    render() {
        return (
            <div className="App">
                <SceneView id="lucerne">
                    <Scene portalItem={{ id: ID_LUCERNE }}></Scene>
                </SceneView>

                <Card body className="city-message-form">
                    <CardTitle>A 3D View of Lucerne! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                    <Button>Submit</Button>
                </Card>
            </div>
        )
    }
}

export class SceneViewLyon extends Component {

    constructor() {
        super();

        this.state = {
            cityIdentifier: "New York",
            cityMessage: "New York is my favorite City",
            id: 1,
            name: "One World Trade Center",
            city: "New York City",
            state: "New York",
            address: null,
            buildingDescription: null,
            height: 0,
            floors: 0,
            funFacts: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newCity = {
            cityIdentifier: "LYON",
            cityMessage: "Lyon is one of my favorite Cities",
            name: "Eiffel Tower",
            city: "Paris",
            state: "",
            address: null,
            buildingDescription: null,
            height: 1063,
            floors: 3,
            funFacts: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
        }

        axios.post('http://localhost:8080/api/skyscraper/', newCity)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    render() {
        return (
            <div className="App">
                <SceneView id="lyon">
                    <Scene portalItem={{ id: ID_LYON }}></Scene>
                </SceneView>

                <Card body className="city-message-form" >
                    <CardTitle>A 3D View of Lyon! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                    <Button onClick={this.onSubmit}>Submit</Button>
                </Card>

                <Form>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                </Form>

            </div>
        )
    }
}



