import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
const Home = observer(({store}) => {
    return (
        <Container align="center">
            <Row >
            <Button variant="outline-dark" className="m-lg-2" size="lg" onClick={() => store?.setContent(5)} >
                Int
            </Button>
        </Row>
            <Row>
                <Button variant="outline-dark" className="m-lg-2" size="lg" onClick={() => store?.setContent('asd')}>
                    String
                </Button>
            </Row>
            <Row>
                <Button variant="outline-dark" className="m-lg-2" size="lg" onClick={() => store?.setContent(['asd', 12])}>
                    Array
                </Button>
            </Row>
            {store?.content}
        </Container>
    );
});

export default Home;
