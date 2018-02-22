import React from 'react';

import styles from './default.style';

export default ({ config, children, ...props }) => {
  return (
    <label style={styles.wrapper}>
      <input {...props} type="checkbox" />
      {children && <span style={styles.text}>{children}</span>}
    </label>
  );
};
