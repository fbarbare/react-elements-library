import React from 'react';

import Box from '../../elements/Box';

import './style.css';

export default () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3">
        <Box config={{ boxBg: '#f0f0f0' }}>
          <div className="box__content">Box With No Shaddow</div>
        </Box>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <Box config={{ boxBg: '#f0f0f0' }} boxShadow>
          <div className="box__content">Box With Shaddow</div>
        </Box>
      </div>
    </div>
  );
};
