import Field from './index';

import { mount } from 'enzyme';
import React from 'react';

describe('Filed component', () => {
  let props;

  beforeEach(() => {
    props = {
      config: {
        inputColor1: 'blue',
        inputColor2: 'red'
      }
    };
  });

  it('should render the input with the right type', () => {
    props.type = 'email';
    const field = mount(<Field {...props} />);

    expect(field.find('input').props()).toHaveProperty('type', 'email');
  });

  it('should render the input with the right name', () => {
    props.name = 'test-details';
    const field = mount(<Field {...props} />);

    expect(field.find('input').props()).toHaveProperty('name', 'test-details');
  });

  it('should render the input with the right placeholder', () => {
    props.placeholder = 'test';
    const field = mount(<Field {...props} />);

    expect(field.find('input').props()).toHaveProperty('placeholder', 'test');
  });

  it('should render the input with the right styles', () => {
    const field = mount(<Field {...props} />);

    expect(field.find('input').props().style).toEqual(
      expect.objectContaining({
        borderColor: 'blue',
        color: 'red'
      })
    );
  });

  it('should show label if label is passed as a prop', () => {
    props.label = 'test';
    const field = mount(<Field {...props} />);

    expect(field.find('label').length).toBe(1);
  });

  it('should not show label if label is not passed as a prop', () => {
    const field = mount(<Field {...props} />);

    expect(field.find('label').length).toBe(0);
  });

  it('should call onChange function if passed', () => {
    const callOnChange = jest.fn();
    props.onChange = callOnChange;
    const field = mount(<Field {...props} />);

    field.find('input').simulate('change');

    expect(callOnChange).toHaveBeenCalledTimes(1);
  });

  it('should call onChange function twice if function called twice', () => {
    const callOnChange = jest.fn();
    props.onChange = callOnChange;
    const field = mount(<Field {...props} />);

    field.find('input').simulate('change');
    field.find('input').simulate('change');

    expect(callOnChange).toHaveBeenCalledTimes(2);
  });
});
