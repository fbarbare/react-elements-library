import React from 'react';

import Text from '../../elements/Text';

import './style.css';

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Text
            config={{
              inputTemplate: 'full-border',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            placeholder="Full Border"
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Text
            config={{
              inputTemplate: 'border-bottom',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            placeholder="Full Border"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Text
            config={{
              inputTemplate: 'full-border',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            placeholder="Full Border With Label"
            label="label"
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Text
            config={{
              inputTemplate: 'border-bottom',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            placeholder="Full Border With Label"
            label="label"
          />
        </div>
      </div>
    </div>
  );
};
