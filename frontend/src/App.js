import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from "components/header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <main>
                    <Container className="pt-3">
                        <p>Hello</p>
                    </Container>
                </main>
            </div>
        );
    }
}

export default App;
