import React, {Component} from 'react';
import styles from "./style.scss";

class NewEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isControlsOpen: false,
            text: ''
        }
    }

    textAreaChangeHandler(e) {
        this.setState({ text: e.target.value })
    }

    textAreaFocusHandler() {
        this.setState({ isControlsOpen: true })
    }

    textAreaBlurHandler() {
        this.setState({ isControlsOpen: !!this.state.text })
    }

    submitHandler(e) {
        console.log('Submit!');
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)} className={styles.form}>
                <textarea value={this.state.text}
                          className={`${styles.text} form-control`}
                          placeholder="What's up?"
                          onChange={this.textAreaChangeHandler.bind(this)}
                          onFocus={this.textAreaFocusHandler.bind(this)}
                          onBlur={this.textAreaBlurHandler.bind(this)}  />

                <div className={`${this.state.isControlsOpen ? 'd-block' : 'd-none'} text-right`}>
                    <button type="submit" className="btn btn-primary mt-1 px-4 btn-sm">Send</button>
                </div>
            </form>
        )
    }
}

export default NewEntry;