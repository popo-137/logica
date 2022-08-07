import React from 'react';
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";

const Content = observer(({store}) => {
    console.log(store.content);

    return (
        <Container align="center "  >
        <div className="mt-3">

            <h1>
            {store.content}
        </h1>
        </div>
            </Container>
    );
});

export default Content;