import React from 'react';

import styles from './style';

export default ({ children, config, overflow = true, boxShadow }) => {
  const isBoxShadowEnabled = typeof boxShadow === 'boolean' ? boxShadow : config.boxShadow;

  return (
    <div
      style={{
        ...styles.box,
        backgroundColor: config.boxBg,
        boxShadow: isBoxShadowEnabled ? '0 0 3px rgba(0,0,0,0.4)' : '',
        overflow: overflow ? 'hidden' : 'initial'
      }}
    >
      {children}
    </div>
  );
};
