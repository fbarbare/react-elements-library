import Checkbox from './index';

import { mount } from 'enzyme';
import React from 'react';

describe('Checkbox component', () => {
  it('should render label within the checkbox if children passed', () => {
    const checkbox = mount(<Checkbox>Test</Checkbox>);

    expect(checkbox.find('span').text()).toBe('Test');
  });

  it('should not render label within the checkbox if children passed', () => {
    const checkbox = mount(<Checkbox />);

    expect(checkbox.find('.checkbox__label').length).toBe(0);
  });

  it('should be required if specified', () => {
    const checkbox = mount(<Checkbox required>Test Text</Checkbox>);

    expect(checkbox.find('input').props()).toHaveProperty('required', true);
  });
});
