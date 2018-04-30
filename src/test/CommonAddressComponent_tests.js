import CommonAddressComponent from '../CommonAddressComponent.js';
import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

const stateTypes = {
  items: [
    {
      id: 1,
      value: 'Alabama',
    },
    {
      id: 2,
      value: 'Alaska',
    },
    {
      id: 3,
      value: 'American Samoa',
    },
    {
      id: 4,
      value: 'Arizona',
    },
    {
      id: 5,
      value: 'Arkansas',
    },
    {
      id: 6,
      value: 'California',
    },
  ],
};
describe('Verify Common Address Fields Component', () => {
  let commonAddressComponent, onChangeSpy;
  onChangeSpy = jasmine.createSpy('onChange');
  const addressFields = {
    street_address: '',
    zip: '',
    city: '',
    state: null,
  };
  const props = {
    addressTitle: 'Physical Address',
    addressType: 'Residential',
    id: 'street_address',
    suggestions: [],
    stateTypes: stateTypes.items,
    addressFields: addressFields,
    onChange: onChangeSpy,
    onSuggestionsFetchRequested: onChangeSpy,
    onSuggestionSelected: onChangeSpy,
  };
  beforeEach(() => {
    commonAddressComponent = shallow(
      <CommonAddressComponent
        addressTitle="Physical Address"
        addressType="Residential"
        id="street_address"
        suggestions={[]}
        stateTypes={stateTypes.items}
        addressFields={addressFields}
        onChange={onChangeSpy}
        renderSuggestion={onChangeSpy}
        onSuggestionsFetchRequested={onChangeSpy}
        onSuggestionSelected={onChangeSpy}
      />
    );
  });
  it('Load Address Fields', () => {
    expect(commonAddressComponent.length).toEqual(1);
  });
  it('verify Residential street address', () => {
    let streetAddress = commonAddressComponent
      .find('#Residentialstreet_address')
      .at(0);
    expect(streetAddress.length).toBe(1);
  });
  it('verify mailing address zip change', () => {
    let zipCodeField = commonAddressComponent.find('#Residentialzip').at(0);
    zipCodeField.simulate('change', { target: { value: '95833' } });
    expect(onChangeSpy).toHaveBeenCalledWith('zip', '95833');
  });

  it('allows only 5 numeric characters for mailing address zip on change ', () => {
    let zipCodeField = commonAddressComponent.find('#Residentialzip').at(0);
    zipCodeField.simulate('change', { target: { value: 'asd958334ccc' } });
    expect(onChangeSpy).toHaveBeenCalledWith('zip', '95833');
  });

  it('verify mailing Address city change', () => {
    let cityField = commonAddressComponent.find('#Residentialcity').at(0);
    cityField.simulate('change', { target: { value: 'Sacramento' } });
    expect(onChangeSpy).toHaveBeenCalledWith('city', 'Sacramento');
  });
  it('verify mailing Address State change', () => {
    let stateDropDownField = commonAddressComponent
      .find('#Residentialstate_type')
      .at(0);
    stateDropDownField.simulate('change', { id: 1, value: 'Alabama' });
    expect(onChangeSpy).toHaveBeenCalledWith('state', {
      id: 1,
      value: 'Alabama',
    });
  });
  describe('AutoSuggest Render', () => {
    let addressComponent;
    beforeEach(() => {
      addressComponent = shallow(<CommonAddressComponent {...props} />);
    });
    it('AutoSuggest label', () => {
      expect(addressComponent.find('label').text()).toEqual('Physical Address');
    });
    it('for AutoSuggest Component load', () => {
      expect(addressComponent.find('Autosuggest').length).toBe(1);
    });
  });
});
