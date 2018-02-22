import Box from './index';

import { shallow } from 'enzyme';
import React from 'react';

describe('Box component', () => {
  let props;

  beforeEach(() => {
    props = {
      config: {
        boxBg: 'red',
        boxShadow: false
      }
    };
  });

  it('renders its children', () => {
    const renderedBox = shallow(<Box {...props}>{'some text'}</Box>);

    expect(renderedBox.contains('some text')).toEqual(true);
  });

  it('renders with the given background color', () => {
    const renderedBox = shallow(<Box {...props} />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'hidden'
    });
  });

  it('renders with a box shadow', () => {
    props.config.boxShadow = true;
    const renderedBox = shallow(<Box {...props} />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '0 0 3px rgba(0,0,0,0.4)',
      overflow: 'hidden'
    });
  });

  it('can enforce the box shadow to show', () => {
    props.config.boxShadow = false;
    const renderedBox = shallow(<Box {...props} boxShadow />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '0 0 3px rgba(0,0,0,0.4)',
      overflow: 'hidden'
    });
  });

  it('can enforce the box shadow not toshow', () => {
    props.config.boxShadow = true;
    const renderedBox = shallow(<Box {...props} boxShadow={false} />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'hidden'
    });
  });

  it('disables the overflow', () => {
    props.overflow = false;
    const renderedBox = shallow(<Box {...props} />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'initial'
    });
  });
});
