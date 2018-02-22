import React from 'react';

import Button from '../../elements/Button';

import './style.css';

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'full', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
          >
            Standard Full
          </Button>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'border', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
          >
            Standard Border
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'full', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
            size="small"
          >
            Small Full
          </Button>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'border', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
            size="small"
          >
            Small Border
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'full', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
            size="big"
          >
            Big Full
          </Button>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'border', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
            size="big"
          >
            Big Border
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'full', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
            disabled
          >
            Standard Full Disabled
          </Button>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'border', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
            disabled
          >
            Standard Border Disabled
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'full', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
            to="/"
          >
            Standard Full Link
          </Button>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Button
            config={{ buttonTemplate: 'border', buttonColor1: '#C56071', buttonColor2: '#f9f9f9' }}
            to="/"
          >
            Standard Border Link
          </Button>
        </div>
      </div>
    </div>
  );
};
