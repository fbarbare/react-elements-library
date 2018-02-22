import React from 'react';

import Radio from '../../elements/Radio';

import './style.css';

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Radio name="foo">Bar</Radio>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Radio name="foo" defaultChecked>
            Baz
          </Radio>
        </div>
      </div>
    </div>
  );
};
