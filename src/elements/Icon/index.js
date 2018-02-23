import React from 'react';
import * as FaIcons from 'react-icons/lib/fa'; // NextJs compatibility

export default ({ type, style, ...props }) => {
  const Icon = FaIcons[type];
  let styling = { display: 'inline-flex' };

  if (!Icon) {
    throw new Error('Icon not found or invalid.');
  }

  if (typeof style === 'object') {
    styling = {
      ...styling,
      ...style
    };
  }

  return (
    <span {...props} style={styling}>
      <Icon />
    </span>
  );
};
