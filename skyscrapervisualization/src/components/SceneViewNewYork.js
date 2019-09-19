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
const ID_LUCERNE = '60245522611b4992880bf70c205eba8e' //Luzern
const ID_LYON = 'ba138a72546a46faa94983a4f0eceb95'
const ID_MONTREAL = '63a16e0c9f364d0fab9d55f40bf71771'
const ID_BOSTON = '1483a59c30e14d1d8640e6c52133296f'

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

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name + ":" + e.target.value);
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

        const inputBuilding = {
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

        console.log(inputBuilding);

        axios.post('http://localhost:8080/api/skyscraper/', inputBuilding)
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

                    {/* Form */}

                    <Form >
                        <FormGroup className="cityMessage">
                            {/* <Label for="exampleText">Name</Label> */}
                            <Input
                                name="name"
                                id="exampleText"
                                placeholder="Enter a name of a building"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Input
                                name="city"
                                id="exampleText"
                                placeholder="City"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Input
                                name="state"
                                id="exampleText"
                                placeholder="State"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="rating"
                                id="exampleText"
                                placeholder="Rating"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="height"
                                id="exampleText"
                                placeholder="height"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="floors"
                                id="exampleText"
                                placeholder="floors"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    {/* Fun fact */}
                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                type="textarea"
                                name="buildingDescription"
                                id="exampleText"
                                placeholder="Enter a description of the city"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="cityIdentifier"
                                id="exampleText"
                                placeholder="City Identifier"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>


                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                type="textarea"
                                name="cityMessage"
                                id="exampleText"
                                placeholder="City message"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Button onClick={this.onSubmit}>Submit</Button>
                </Card>

                <Card body className="weather-card">
                    <CardTitle>Weather of New York! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                </Card>

            </div>

        )
    }
}

export class SceneViewParis extends Component {

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
    }

    onSubmit(e) {
        e.preventDefault();
        const inputBuilding = {
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
        // createMessage(newBuilding, this.props.history);

        axios.post('http://localhost:8080/api/skyscraper/', inputBuilding)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    onChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name + ":" + e.target.value);
    }

    render() {
        return (
            <div className="App">
                <SceneView id="paris">
                    <Scene portalItem={{ id: ID_PARIS }}></Scene>
                </SceneView>

                <Card body className="city-message-form">
                    <CardTitle>A 3D View of Paris! </CardTitle>

                    {/* Form */}

                    <Form >
                        <FormGroup className="cityMessage">
                            {/* <Label for="exampleText">Name</Label> */}
                            <Input
                                name="name"
                                id="exampleText"
                                placeholder="Enter a name of a building"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Input
                                name="city"
                                id="exampleText"
                                placeholder="City"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Input
                                name="state"
                                id="exampleText"
                                placeholder="State"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="rating"
                                id="exampleText"
                                placeholder="Rating"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="height"
                                id="exampleText"
                                placeholder="height"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="floors"
                                id="exampleText"
                                placeholder="floors"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    {/* Fun fact */}
                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                type="textarea"
                                name="buildingDescription"
                                id="exampleText"
                                placeholder="Enter a description of the city"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="cityIdentifier"
                                id="exampleText"
                                placeholder="City Identifier"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>


                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                type="textarea"
                                name="cityMessage"
                                id="exampleText"
                                placeholder="City message"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Button onClick={this.onSubmit}>Submit</Button>
                </Card>

                <Card body className="weather-card">
                    <CardTitle>Weather of Paris! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                </Card>
            </div>
        )
    }
}

export class SceneViewGeneva extends Component {

    constructor() {
        super();

        this.state = {
            cityIdentifier: "Geneva",
            cityMessage: "Geneva is my favorite City",
            id: 1,
            name: "St. Pierre Cathedral",
            city: "Geneva",
            state: "Geneva",
            address: null,
            buildingDescription: null,
            height: 0,
            floors: 0,
            funFacts: ""
        }
    }

    onSubmit = () => {
        const newBuilding = {
            cityIdentifier: "Geneva",
            cityMessage: "Geneva is my favorite City",
            id: 1,
            name: "St. Pierre Cathedral",
            city: "Geneva",
            state: "Geneva",
            address: null,
            buildingDescription: null,
            height: 0,
            floors: 0,
            funFacts: ""
        }
    }

    onChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name + ":" + e.target.value);
    }


    render() {
        return (
            <div className="App">
                <SceneView id="geneva">
                    <Scene portalItem={{ id: ID_GENEVA }}></Scene>
                </SceneView>

                <Card body className="city-message-form">
                    <CardTitle>A 3D View of Geneva! </CardTitle>

                    {/* Form */}

                    <Form >
                        <FormGroup className="cityMessage">
                            {/* <Label for="exampleText">Name</Label> */}
                            <Input
                                name="name"
                                id="exampleText"
                                placeholder="Enter a name of a building"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Input
                                name="city"
                                id="exampleText"
                                placeholder="City"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Input
                                name="state"
                                id="exampleText"
                                placeholder="State"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="rating"
                                id="exampleText"
                                placeholder="Rating"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="height"
                                id="exampleText"
                                placeholder="height"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="floors"
                                id="exampleText"
                                placeholder="floors"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    {/* Fun fact */}
                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                type="textarea"
                                name="buildingDescription"
                                id="exampleText"
                                placeholder="Enter a description of the city"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="cityIdentifier"
                                id="exampleText"
                                placeholder="City Identifier"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>


                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                type="textarea"
                                name="cityMessage"
                                id="exampleText"
                                placeholder="City message"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Button onClick={this.onSubmit}>Submit</Button>
                </Card>

                <Card body className="weather-card">
                    <CardTitle>Weather of Geneva! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                </Card>

            </div>
        )
    }
}

export class SceneViewLucerne extends Component {

    constructor() {
        super();

        this.state = {
            cityIdentifier: "Geneva",
            cityMessage: "Geneva is my favorite City",
            id: 1,
            name: "St. Pierre Cathedral",
            city: "Geneva",
            state: "Geneva",
            address: null,
            buildingDescription: null,
            height: 0,
            floors: 0,
            funFacts: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        let buildingInfo = {
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

        axios.post('http://localhost:8080/api/skyscraper/', buildingInfo)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state);
    }


    render() {
        return (
            <div className="App">
                <SceneView id="lucerne">
                    <Scene portalItem={{ id: ID_LUCERNE }}></Scene>
                </SceneView>

                <Card body className="city-message-form">
                    <CardTitle>A 3D View of Geneva! </CardTitle>

                    {/* Form */}

                    <Form >
                        <FormGroup className="cityMessage">
                            {/* <Label for="exampleText">Name</Label> */}
                            <Input
                                name="name"
                                id="exampleText"
                                placeholder="Enter a name of a building"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Input
                                name="city"
                                id="exampleText"
                                placeholder="City"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Input
                                name="state"
                                id="exampleText"
                                placeholder="State"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="rating"
                                id="exampleText"
                                placeholder="Rating"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="height"
                                id="exampleText"
                                placeholder="height"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="floors"
                                id="exampleText"
                                placeholder="floors"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    {/* Fun fact */}
                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                type="textarea"
                                name="buildingDescription"
                                id="exampleText"
                                placeholder="Enter a description of the city"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                name="cityIdentifier"
                                id="exampleText"
                                placeholder="City Identifier"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>


                    <Form >
                        <FormGroup className="cityMessage">

                            <Input
                                type="textarea"
                                name="cityMessage"
                                id="exampleText"
                                placeholder="City message"
                                onChange={this.onChange}
                            />
                        </FormGroup>
                    </Form>

                    <Button onClick={this.onSubmit}>Submit</Button>
                </Card>

                <Card body className="weather-card">
                    <CardTitle>Weather of Luzern! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                </Card>
            </div>
        )
    }
}

export class SceneViewLyon extends Component {

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
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newCity = {
            name: "Lyon Building",
            city: "Lyon",
            state: "Lyon, France",
            rating: 4,
            height: 1792,
            floors: 104,
            funFacts: "Lyon is one of the cities in France",
            cityIdentifier: "LYON",
            cityMessage: "Lyon is my favorite City"
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
                    {/* Form */}
                    <Form >
                        <FormGroup className="cityMessage">
                            <Label for="exampleText">Description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Form>

                    <Form >
                        <FormGroup className="cityMessage">
                            <Label for="exampleText">City</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Form>
                    <Form >
                        <FormGroup className="cityMessage">
                            <Label for="exampleText">State</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Form>
                    <Form >
                        <FormGroup className="cityMessage">
                            <Label for="exampleText">Description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Form>
                </Card>

                <Card body className="weather-card">
                    <CardTitle>Weather of Lyon! </CardTitle>
                    <CardText>What's your favorite part of the city?</CardText>
                </Card>

            </div>
        )
    }
}

export class SceneViewBoston extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className="App">
                <SceneView id="lyon">
                    <Scene portalItem={{ id: ID_BOSTON }}></Scene>
                </SceneView>
            </div>
        )
    }
}

export class SceneViewMontreal extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <SceneView id="lyon">
                    <Scene portalItem={{ id: ID_MONTREAL }}></Scene>
                </SceneView>
            </div>
        )
    }
}



