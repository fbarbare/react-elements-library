import React from 'react';

import Default from './default';
import Toggle from './toggle';

export default props => {
  let Component = Default;

  if (typeof props.config !== 'undefined' && props.config.checkboxTemplate === 'toggle') {
    Component = Toggle;
  }

  return <Component {...props} />;
};
