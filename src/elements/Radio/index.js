import React from 'react';

export default ({ children, ...props }) => {
  return (
    <label>
      <input {...props} type="radio" />
      {children}
    </label>
  );
};
