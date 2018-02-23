import React, { PureComponent } from 'react';

import Icon from '../Icon';

import styles from './style';

export default class Box extends PureComponent {
  state = {
    collapsed: this.props.collapsible ? !!this.props.defaultCollapsed : false
  };

  toggleContent = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const {
      children,
      config,
      overflow,
      boxShadow,
      headingText,
      headingIcon,
      headingType,
      defaultCollapsed,
      collapsible,
      ...props
    } = this.props;

    const Heading = headingType || 'h2';
    const isBoxShadowEnabled = typeof boxShadow === 'boolean' ? boxShadow : config.boxShadow;
    const boxStyles = {
      ...styles.box,
      backgroundColor: config.boxBg,
      boxShadow: isBoxShadowEnabled ? '0 0 3px rgba(0,0,0,0.4)' : '',
      overflow: overflow ? 'hidden' : 'initial'
    };

    const headingProps = {
      style: styles.heading
    };

    if (collapsible) {
      headingProps.style = {
        ...headingProps.style,
        ...styles.headingCollapsible
      };

      headingProps.onClick = this.toggleContent;
    }

    return (
      <div {...props} style={boxStyles}>
        {headingText && (
          <Heading {...headingProps}>
            {headingIcon && <Icon type={headingIcon} style={styles.headingIcon} />}
            <span style={styles.headingText}>{headingText}</span>
            {collapsible && <Icon type={this.state.collapsed ? 'FaAngleDown' : 'FaAngleUp'} />}
          </Heading>
        )}
        {!this.state.collapsed && <div>{children}</div>}
      </div>
    );
  }
}
