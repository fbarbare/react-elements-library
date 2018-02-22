import React from 'react';

import styles from './style';

const keyframe = `
@-webkit-keyframes Loader_Rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
  }
}
@keyframes Loader_Rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform:rotate(0deg)
  }
  to {
    -webkit-transform: rotate(360deg);
    transform:rotate(360deg)
  }
}`;

export default ({ children }) => {
  return (
    <div style={styles.overlay}>
      <style dangerouslySetInnerHTML={{ __html: keyframe }} />
      <div style={styles.container}>
        <div style={styles.circleContainer}>
          <div style={styles.circle} />
          {children && <div style={styles.text}>{children}</div>}
        </div>
      </div>
    </div>
  );
};
