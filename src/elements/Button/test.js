import Button from './index';

import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter as Router, Link } from 'react-router-dom';

describe('Button component', () => {
  let props;

  beforeEach(() => {
    props = {
      config: {
        buttonColor1: 'red',
        buttonColor2: 'white'
      }
    };
  });

  it('renders its text', () => {
    const renderedButton = mount(<Button {...props}>{'some text'}</Button>);

    expect(renderedButton.contains('some text')).toEqual(true);
  });

  it('renders a button when no link is given', () => {
    const renderedButton = mount(<Button {...props} />);

    expect(renderedButton.find('button').name()).toEqual('button');
  });

  it('renders a link when a link is given', () => {
    const renderedButton = mount(
      <Router>
        <Button {...props} to="someLink" />
      </Router>
    );
    expect(renderedButton.find('Link').name()).toEqual('Link');
  });

  it('gives a type to the button', () => {
    const renderedButton = mount(<Button {...props} type="any type" />);

    expect(renderedButton.find('button').props().type).toEqual('any type');
  });

  it('does not render the button as block by default', () => {
    const renderedButton = mount(<Button {...props} />);

    expect(renderedButton.find('button').hasClass('block')).toEqual(false);
  });

  it('triggers the click event when clicked', () => {
    const onClick = jest.fn();
    const renderedButton = mount(<Button {...props} onClick={onClick} />);

    renderedButton.find('button').simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('renders a medium button by default', () => {
    const renderedButton = mount(<Button {...props} />);

    expect(renderedButton.find('button').props().style).toEqual(
      expect.objectContaining({
        fontSize: '1em',
        margin: '5px auto',
        padding: '10px 20px'
      })
    );
  });
  it('renders a button as small when specified', () => {
    const renderedButton = mount(<Button {...props} size="small" />);

    expect(renderedButton.find('button').props().style).toEqual(
      expect.objectContaining({
        fontSize: '0.8em',
        margin: '3px auto',
        padding: '5px 10px'
      })
    );
  });

  describe('when the template is border', () => {
    beforeEach(() => {
      props.config.buttonTemplate = 'border';
    });

    it('adds the right styles', () => {
      const renderedButton = mount(<Button {...props} />);

      expect(renderedButton.find('button').props().style).toEqual(
        expect.objectContaining({
          backgroundColor: 'white',
          borderColor: 'red',
          color: 'red'
        })
      );
    });

    it('adds the right styles on its hover state', () => {
      const renderedButton = mount(<Button {...props} />);

      renderedButton.setState({ active: true });

      expect(renderedButton.find('button').props().style).toEqual(
        expect.objectContaining({
          backgroundColor: 'red',
          borderColor: 'red',
          color: 'white'
        })
      );
    });
  });

  describe('when the template is full', () => {
    beforeEach(() => {
      props.config.buttonTemplate = 'full';
    });

    it('adds the right styles', () => {
      const renderedButton = mount(<Button {...props} />);

      expect(renderedButton.find('button').props().style).toEqual(
        expect.objectContaining({
          backgroundColor: 'red',
          color: 'white'
        })
      );
    });

    it('adds the right styles on its hover state', () => {
      const renderedButton = mount(<Button {...props} />);

      renderedButton.setState({ active: true });

      expect(renderedButton.find('button').props().style).toEqual(
        expect.objectContaining({
          backgroundColor: 'red',
          color: 'white',
          opacity: 0.7
        })
      );
    });
  });
});
