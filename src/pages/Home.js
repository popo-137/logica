import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Row} from "react-bootstrap";
import {action, makeAutoObservable, observable, reaction} from "mobx";
import {observer, useLocalObservable} from "mobx-react-lite";

const Home = observer(() => {

     const Changer = useLocalObservable(() => ({
             content: null,

             changeInt(content){
                 this.content = content
             },
             changeStr(content){
                 this.content = content
             },
             changeArr(content){
                 this.content = content
             },

         }
     ))
    reaction(() => JSON.stringify(Changer), json => {
        localStorage.setItem('Changer',json);
    }, {
        delay: 500,
    });

    let json = localStorage.getItem('Changer');
    if(json) {action(() =>
        Object.assign(Changer, JSON.parse(json)));
    }
    return (


        <Container align="center" >
            <Row >
            <Button variant="outline-dark" className="m-lg-2" size="lg" onClick={() => Changer.changeInt(5)} >
                Int
            </Button>
        </Row>
            <Row>
                <Button variant="outline-dark" className="m-lg-2" size="lg" onClick={() => Changer.changeStr('asd')}>
                    String
                </Button>
            </Row>
            <Row>
                <Button variant="outline-dark" className="m-lg-2" size="lg" onClick={() => Changer.changeArr(['asd', 12])}>
                    Array
                </Button>
            </Row>
            {Changer.content}

        </Container>
    );
});

export default Home;
