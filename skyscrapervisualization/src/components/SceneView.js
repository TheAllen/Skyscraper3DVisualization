import React, {Component} from 'react';
import { SceneView, Scene, Layer, S } from 'react-sceneview';
import { Card, Button, CardText, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';

import axios from "axios";

export default class SceneViewCity extends Component {

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
        return(
            <div className="App">
                <SceneView id="newyork">
                    <Scene portalItem={{ id: this.props.id }}>

                    </Scene>
                </SceneView>

                <Card body className="city-message-form">
                    <CardTitle>A 3D View of Manhattan!</CardTitle>

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