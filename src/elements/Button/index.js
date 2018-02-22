import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './style';

export default class Button extends PureComponent {
  state = {
    active: false
  };

  toggleHover = () => {
    this.setState({ active: !this.state.active });
  };

  componentDidMount() {
    this.buttonWrapper.addEventListener('mouseleave', this.toggleHover);
    this.buttonWrapper.addEventListener('mouseenter', this.toggleHover);
  }

  componentWillUnmount() {
    this.buttonWrapper.removeEventListener('mouseleave', this.toggleHover);
    this.buttonWrapper.removeEventListener('mouseenter', this.toggleHover);
  }

  render() {
    const { children, config, size, ...props } = this.props;
    const { buttonTemplate, buttonColor1, buttonColor2 } = config;
    const Component = !!props.to ? Link : 'button';
    let style = styles.button;

    switch (size) {
      case 'small':
        style = {
          ...style,
          ...styles.buttonSmall
        };
        break;
      case 'big':
        style = {
          ...style,
          ...styles.buttonBig
        };
        break;
      default:
        style = {
          ...style,
          ...styles.buttonMedium
        };
    }
    switch (buttonTemplate) {
      case 'border':
        if (this.state.active) {
          style = {
            ...style,
            color: buttonColor2,
            borderColor: buttonColor1,
            backgroundColor: buttonColor1
          };
        } else {
          style = {
            ...style,
            color: buttonColor1,
            borderColor: buttonColor1,
            backgroundColor: buttonColor2
          };
        }
        break;
      case 'full':
        style = {
          ...style,
          color: buttonColor2,
          backgroundColor: buttonColor1
        };

        if (this.state.active) style.opacity = 0.7;
        break;
      default:
        break;
    }

    if (props.disabled) {
      style = {
        ...style,
        ...styles.buttonDisabled
      };
    }

    return (
      <span ref={el => (this.buttonWrapper = el)}>
        <Component {...props} className={`${size}`} style={style}>
          {children}
        </Component>
      </span>
    );
  }
}
