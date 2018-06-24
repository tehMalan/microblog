import React, {Component} from 'react';
import styles from "./style.scss";
import EntryText from "components/new_entry/EntryText";

class NewEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isControlsOpen: false,
            text: ''
        };

        this.onTextFocusChanged = this.onTextFocusChanged.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    onTextChanged(text) {
        console.log(text);
        this.setState({ text: text });
    }

    onTextFocusChanged(isFocused) {
        console.log(this.state.text);
        this.setState({ isControlsOpen: isFocused || (!isFocused && !!this.state.text) });
    }

    submitHandler(e) {
        console.log('Submit!' + this.state.text);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className={styles.form}>
                <EntryText value={this.state.text} onValueChanged={this.onTextChanged} onTextFocusChanged={this.onTextFocusChanged} />

                <div className={`${this.state.isControlsOpen ? 'd-block' : 'd-none'} text-right`}>
                    <button type="submit" className="btn btn-primary mt-1 px-4 btn-sm">Send</button>
                </div>
            </form>
        )
    }
}

export default NewEntry;