import React from 'react';
import * as FaIcons from 'react-icons/lib/fa'; // NextJs compatibility

export default ({ type }) => {
  const Icon = FaIcons[type];

  if (!Icon) {
    throw new Error('Icon not found or invalid.');
  }

  return (
    <div style={{ display: 'flex' }}>
      <Icon />
    </div>
  );
};
