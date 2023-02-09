import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import cow from "./assets/cow.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Rachel Robins
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World (no longer header bc tests
                will not pass)
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                        <img src={cow} alt="cow" width="600" />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                        <h3>Things I Love About Cows</h3>
                        <ul>
                            <li>large</li>
                            <li>beautiful faces</li>
                            <li>milk</li>
                            <li>make good friends</li>
                            <li>round</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
