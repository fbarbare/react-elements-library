import React from 'react';

import Box from '../../elements/Box';

import './style.css';

// collapsible
// defaultCollapsed
// className

export default () => {
  return (
    <div>
      <div className="box__row row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Box config={{ boxBg: '#f0f0f0' }}>
            <div className="box__content">Box With No Shadow</div>
          </Box>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Box config={{ boxBg: '#f0f0f0' }} boxShadow>
            <div className="box__content">Box With Shadow</div>
          </Box>
        </div>
      </div>
      <div className="box__row row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Box config={{ boxBg: '#f0f0f0' }} headingText="My Title" boxShadow>
            <div className="box__content">Box With Shadow And Title</div>
          </Box>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Box config={{ boxBg: '#f0f0f0' }} headingText="My Title" headingIcon="FaBeer" boxShadow>
            <div className="box__content">Box With Shadow And Title And Icon</div>
          </Box>
        </div>
      </div>
      <div className="box__row row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Box
            config={{ boxBg: '#f0f0f0' }}
            headingText="My Title"
            headingIcon="FaBeer"
            headingType="h4"
            boxShadow
          >
            <div className="box__content">
              Box with Shadow and Title and Icon and Heading Type as h4
            </div>
          </Box>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3" />
      </div>
      <div className="box__row row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Box config={{ boxBg: '#f0f0f0' }} headingText="My Title" boxShadow collapsible>
            <div className="box__content">Box Collapsible</div>
          </Box>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Box
            config={{ boxBg: '#f0f0f0' }}
            headingText="My Title"
            boxShadow
            collapsible
            defaultCollapsed
          >
            <div className="box__content">Box Collapsible, Collapsed by default</div>
          </Box>
        </div>
      </div>
    </div>
  );
};
