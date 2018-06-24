import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from "components/header";
import NewEntry from "./components/new_entry/NewEntry";

class App extends Component {
    render() {
        return (
            <div className="h-100">
                <Header/>

                <main className="h-100">
                    <Container className="pt-3 mt-1 h-100">
                        <NewEntry/>
                    </Container>
                </main>
            </div>
        );
    }
}

export default App;
