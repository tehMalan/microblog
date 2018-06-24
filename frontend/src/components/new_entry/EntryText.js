import React, {Component} from 'react';
import styles from './style.scss';

class EntryText extends Component {

    constructor(props) {
        super(props);

        this.state = { value: props.value };

        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.textAreaFocusHandler = this.textAreaFocusHandler.bind(this);
        this.textAreaBlurHandler = this.textAreaBlurHandler.bind(this);
    }

    textChangeHandler(e) {
        this.setState({ value: e.target.value });
        this.props.onValueChanged(e.target.value);
    }

    textAreaFocusHandler() {
        this.props.onTextFocusChanged(true);
    }

    textAreaBlurHandler() {
        this.props.onTextFocusChanged(false);
    }

    render() {
        return (
            <textarea value={this.state.value}
                      className={`${styles.text} form-control`}
                      placeholder="What's up?"
                      onChange={this.textChangeHandler}
                      onFocus={this.textAreaFocusHandler}
                      onBlur={this.textAreaBlurHandler}  />
        );
    }
}

export default EntryText;