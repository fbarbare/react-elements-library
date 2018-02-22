import Select from './index';

import { mount } from 'enzyme';
import React from 'react';

describe('Select component', () => {
  const config = {
    inputColor1: 'red',
    inputColor1: 'white',
    inputTemplate: 'full-border'
  };
  let renderedComponent;

  afterEach(() => {
    renderedComponent.unmount();
  });

  it('should render select with correct template', () => {
    renderedComponent = mount(<Select config={config} defaultValue={2} options={6} />);

    expect(renderedComponent.find('select').props().style).toEqual(
      expect.objectContaining({
        borderColor: 'inherit',
        borderTopColor: 'white',
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px'
      })
    );
  });

  describe('display label', () => {
    it('should show label if label is passed as a prop', () => {
      renderedComponent = mount(
        <Select config={config} defaultValue={2} options={6} label="test test" />
      );

      expect(renderedComponent.find('label > div').length).toEqual(2);
      expect(
        renderedComponent
          .find('label > div')
          .at(0)
          .text()
      ).toEqual('test test');
    });

    it('should not show label if label is not passed as a prop', () => {
      renderedComponent = mount(<Select config={config} defaultValue={2} options={6} />);

      expect(renderedComponent.find('label > div').length).toBe(1);
    });
  });

  describe('have css', () => {
    const config = {
      inputColor1: 'blue',
      inputColor2: 'red'
    };

    it('should show label if label is passed as a prop', () => {
      renderedComponent = mount(<Select config={config} defaultValue={2} options={6} />);

      expect(renderedComponent.find('select').props()).toHaveProperty('style', {
        borderBottomColor: 'blue',
        borderLeftColor: 'blue',
        borderRightColor: 'blue',
        borderTopColor: 'blue',
        color: 'red'
      });
    });
  });

  describe('on change', () => {
    it('should call the onChange function on value change', () => {
      const callOnChange = jest.fn();
      renderedComponent = mount(
        <Select config={config} value={1} options={6} onChange={callOnChange} />
      );

      renderedComponent.find('select').simulate('change', { target: { value: '2' } });
      expect(callOnChange).toHaveBeenCalledTimes(1);
    });
  });
});
