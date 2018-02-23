import Box from './index';

import { mount } from 'enzyme';
import React from 'react';

import { FaBeer } from 'react-icons/lib/fa';

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
    const renderedBox = mount(<Box {...props}>{'some text'}</Box>);

    expect(renderedBox.contains('some text')).toEqual(true);
  });

  it('renders with the given background color', () => {
    const renderedBox = mount(<Box {...props} />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'hidden'
    });
  });

  it('renders with a box shadow', () => {
    props.config.boxShadow = true;
    const renderedBox = mount(<Box {...props} />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '0 0 3px rgba(0,0,0,0.4)',
      overflow: 'hidden'
    });
  });

  it('can enforce the box shadow to show', () => {
    props.config.boxShadow = false;
    const renderedBox = mount(<Box {...props} boxShadow />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '0 0 3px rgba(0,0,0,0.4)',
      overflow: 'hidden'
    });
  });

  it('can enforce the box shadow not toshow', () => {
    props.config.boxShadow = true;
    const renderedBox = mount(<Box {...props} boxShadow={false} />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'hidden'
    });
  });

  it('disables the overflow', () => {
    props.overflow = false;
    const renderedBox = mount(<Box {...props} />);

    expect(renderedBox.props().style).toEqual({
      backgroundColor: 'red',
      borderRadius: '2px',
      boxShadow: '',
      overflow: 'initial'
    });
  });

  it('adds a heading', () => {
    props.headingText = 'My Title';
    const renderedBox = mount(<Box {...props} />);

    expect(renderedBox.text()).toEqual('My Title');
  });

  it('adds an icon to the heading', () => {
    props.headingIcon = 'FaBeer';
    const renderedBox = mount(<Box {...props} />);

    expect(renderedBox.find(FaBeer).length).toEqual(1);
  });
});
