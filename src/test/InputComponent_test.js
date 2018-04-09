import React from 'react';
import InputComponent from '../InputComponent.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('Input component', () => {
  const wrapper = shallow(<InputComponent />);
  const input = {
    id: '123ASD',
    label: 'label name',
    gridClassName: 'grid class name',
    serverError: true,
    labelClassName: 'label class name',
    fieldClassName: 'field class name',
    placeholder: 'string ',
    value: 'enter the name',
  };
  const instance = wrapper.instance();
  wrapper.setProps(input);

  it('has basic elements', () => {
    expect(wrapper.hasClass('form-group')).toBe(true);
    expect(
      wrapper
        .find('span')
        .at(0)
        .props().className
    ).toEqual('error text-danger');
    expect(
      wrapper
        .find('i')
        .at(0)
        .props().className
    ).toEqual('fa fa-exclamation-triangle');
  });

  it('has props ', () => {
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().className
    ).toEqual(input.gridClassName + ' has-error');
    expect(
      wrapper
        .find('label')
        .at(0)
        .props().className
    ).toEqual(input.labelClassName);
    expect(
      wrapper
        .find('label')
        .at(0)
        .props().htmlFor
    ).toEqual(input.id);
    expect(instance.props.label).toBe('label name');
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().placeholder
    ).toEqual(input.placeholder);
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().value
    ).toEqual(input.value);
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().value
    ).toEqual(input.value);
  });
});
