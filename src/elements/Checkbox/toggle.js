import React, { PureComponent } from 'react';
import { Simulate } from 'react-dom/test-utils';

import styles from './toggle.style';

export default class Toggle extends PureComponent {
  state = {
    checked: false
  };

  componentDidMount() {
    this.setState({ checked: this.checkbox.checked });
  }

  onKeyPress = event => {
    if (event.key === ' ') {
      this.checkbox.checked = !this.state.checked;
      Simulate.change(this.checkbox);
    }

    if (event.key === 'Enter' && this.checkbox.form) {
      Simulate.submit(this.checkbox.form);
    }
  };

  onChange = event => {
    this.setState({ checked: this.checkbox.checked });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event);
    }
  };

  render() {
    const { children, config, ...props } = this.props;
    const { checked, focused } = this.state;

    return (
      <label
        tabIndex="0"
        style={{ ...styles.label, ...(focused ? styles.labelFocused : {}) }}
        onKeyPress={this.onKeyPress}
      >
        <input
          {...props}
          ref={el => (this.checkbox = el)}
          type="checkbox"
          tabIndex="-1"
          style={styles.checkbox}
          onChange={this.onChange}
        />

        <span style={styles.container}>
          <span style={{ ...styles.rail, ...(checked ? styles.railChecked : {}) }} />
          <span style={{ ...styles.ball, ...(checked ? styles.ballChecked : {}) }} />
        </span>

        {children && <div style={styles.text}>{children}</div>}
      </label>
    );
  }
}
