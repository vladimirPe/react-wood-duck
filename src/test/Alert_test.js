import React from 'react';
import Alert from '../Alert.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('Alert', () => {
  const alertclass = 'Testing';
  const wrapper = shallow(
    <Alert
      alertClassName={alertclass}
      faIcon={alertclass}
      alertMessage="Handguns in house"
    />
  );
  const alert = {
    alertClassName: 'Success!',
    faIcon: 'fa-info-circle icon',
    alertCross: true,
  };
  const component = shallow(<Alert />);
  component.setProps(alert);

  it('has a className', () => {
    expect(wrapper.hasClass('row')).toBe(true);
  });

  describe('#messageData()', () => {
    const alertData = {
      alertMessage: [
        {
          activation_date: '1-4-2002',
          activation_reason_code: 'Handguns in house',
        },
        {
          activation_date: '4-5-2003',
          activation_reason_code:
            'Aggressive dog on premises, yard not fenced ',
        },
      ],
      reasons: [],
      messageData() {
        if (Array.isArray(alertData.alertMessage)) {
          return alertData.alertMessage.map(item => {
            alertData.reasons.push(item.activation_reason_code);
          });
        } else return alertData.alertMessage;
      },
    };
    const component = shallow(<Alert />);
    component.setProps(alertData);
    it('displays array', () => {
      expect(alertData.messageData().length).toEqual(2);
    });
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
    expect(instance.props.alertMessage).toEqual('Handguns in house');
  });
});
