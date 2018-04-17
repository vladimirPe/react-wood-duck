import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InputComponent from '../../src/InputComponent';

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;

const InputComponentStory = withInfo(
  `
  #### Usage
    - Use for requesting a small amount of information 
    that cannot be obtained with prepopulated options 
    (Usernames, Passwords, Screening Narrative).
  
    - Show the appropriate keyboard for text entry 
    (on mobile).

  ##### Accessibility

    - Avoid placeholder text for accessibility reasons. 
    Most browsers’ default rendering of placeholder 
    text does not provide a high enough contrast ratio.

    - Avoid breaking numbers with distinct sections 
    (such as phone numbers, Social Security Numbers, or 
      credit card numbers) into separate input fields. 
      For example, use one input for phone number, not 
      three (one for area code, one for local code, and 
        one for number). Each field needs to be labeled 
        for a screen reader and the labels for fields 
        broken into segments are often not meaningful.
        `
)(() => (
  <div>
    <InputComponent
      label="Full Name"
      gridClassName="col-md-12 col-sm-12 col-xs-12"
      labelClassName="Full Name"
      placeholder="Enter Full Name"
      maxLength={10}
    />
    <InputComponent
      label="Full Name"
      gridClassName="col-md-12 col-sm-12 col-xs-12"
      labelClassName="Full Name"
      validationError={true}
      validationErrorMessage="Error message goes here"
    />
    <InputComponent
      label="Full Name"
      gridClassName="col-md-12 col-sm-12 col-xs-12"
      labelClassName="Full Name"
      placeholder="Disabled"
      disabled={true}
    />
  </div>
));

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('InputComponent', InputComponentStory);
