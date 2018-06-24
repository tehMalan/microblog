import React, {Component} from 'react';
import styles from "./style.scss";

class NewEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isControlsOpen: false,
            text: ''
        };

        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.textAreaFocusHandler = this.textAreaFocusHandler.bind(this);
        this.textAreaBlurHandler = this.textAreaBlurHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    textChangeHandler(e) {
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
            <form onSubmit={this.submitHandler} className={styles.form}>
                <textarea value={this.state.text}
                          className={`${styles.text} form-control`}
                          placeholder="What's up?"
                          onChange={this.textChangeHandler}
                          onFocus={this.textAreaFocusHandler}
                          onBlur={this.textAreaBlurHandler}  />

                <div className={`${this.state.isControlsOpen ? 'd-block' : 'd-none'} text-right`}>
                    <button type="submit" className="btn btn-primary mt-1 px-4 btn-sm">Send</button>
                </div>
            </form>
        )
    }
}

export default NewEntry;