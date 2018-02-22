import React from 'react';

import Checkbox from '../../elements/Checkbox';

import './style.css';

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Checkbox config={{ checkboxTemplate: 'default' }}>Default</Checkbox>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Checkbox config={{ checkboxTemplate: 'toggle' }}>Toggle</Checkbox>
        </div>
      </div>
    </div>
  );
};
