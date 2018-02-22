import React from 'react';

import Select from '../../elements/Select';

import './style.css';

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          Full Border with options array
          <Select
            config={{
              inputTemplate: 'full-border',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            options={[
              {
                text: 'Option 1',
                value: 'option-1'
              },
              {
                text: 'Option 2',
                value: 'option-2'
              },
              {
                text: 'Option 3',
                value: 'option-3'
              },
              {
                text: 'Option 4',
                value: 'option-4'
              }
            ]}
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          Border Bottom with options array
          <Select
            config={{
              inputTemplate: 'border-bottom',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            options={[
              {
                text: 'Option 1',
                value: 'option-1'
              },
              {
                text: 'Option 2',
                value: 'option-2'
              },
              {
                text: 'Option 3',
                value: 'option-3'
              },
              {
                text: 'Option 4',
                value: 'option-4'
              }
            ]}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          Full Border with number
          <Select
            config={{
              inputTemplate: 'full-border',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            options={10}
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          Border Bottom with number
          <Select
            config={{
              inputTemplate: 'border-bottom',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            options={10}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          Full Border with label
          <Select
            config={{
              inputTemplate: 'full-border',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            label="My Label"
            options={10}
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          Border Bottom with label
          <Select
            config={{
              inputTemplate: 'border-bottom',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            label="My Label"
            options={10}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          Full Border with placeholder
          <Select
            config={{
              inputTemplate: 'full-border',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            placeholder="My Label"
            options={10}
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          Border Bottom with placeholder
          <Select
            config={{
              inputTemplate: 'border-bottom',
              inputColor1: '#C56071',
              inputColor2: '#555'
            }}
            placeholder="My Label"
            options={10}
          />
        </div>
      </div>
    </div>
  );
};
