import React from 'react';
import Alert from '../Alert.js';
import { shallow, mount } from 'enzyme';
import './EnzymeSetup';

describe('Alert', () => {
  const alertclass = 'Testing';
  const wrapper = shallow(
    <Alert alertClassName={alertclass} faIcon={alertclass} />
  );
  const alert = {
    alertClassName: 'Success!',
    faIcon: 'fa-info-circle icon',
    alertCross: true,
    children: 'children',
  };
  const component = mount(<Alert />);
  component.setProps(alert);

  it('has a className', () => {
    expect(wrapper.hasClass('row')).toBe(true);
  });

  it('has a props', () => {
    expect(
      component
        .find('div')
        .at(1)
        .props().className
    ).toEqual('col-xs-12');

    expect(
      component
        .find('div')
        .at(2)
        .props().className
    ).toEqual('alert-message ' + alert.alertClassName + '-message');

    expect(
      component
        .find('div')
        .at(3)
        .props().className
    ).toEqual('alert-icon');

    expect(
      component
        .find('div')
        .at(4)
        .props().className
    ).toEqual('alert-text');

    expect(component.props().children).toEqual(alert.children);

    expect(
      component
        .find('i')
        .at(0)
        .props().className
    ).toEqual('fa ' + alert.faIcon);

    expect(
      component
        .find('div')
        .at(5)
        .props().className
    ).toEqual('alert-cross');
    expect(
      component
        .find('i')
        .at(1)
        .props().className
    ).toEqual('fa fa-times');
    const instance = wrapper.instance();
    expect(instance.props.faIcon).toEqual(alertclass);
    expect(instance.props.alertClassName).toEqual(alertclass);
    expect(instance.props.alertCross).toEqual(true);
  });
});
