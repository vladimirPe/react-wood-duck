import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Alert from '../../src/Alert';

const longMessage = `Error it enim ad minim veniam, quis nostrud exercitation ullamco 
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
  deserunt mollit anim id est laborum.`;

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;

class Alerts extends React.Component {
  render() {
    return (
      <div>
        <Alert
          alertClassName="error"
          faIcon="fa-exclamation-triangle"
          alertCross={false}
        >
          {'Error Message'}
        </Alert>
        <Alert alertClassName="warning" faIcon="fa-warning">
          {'Warning Message'}
        </Alert>
        <Alert alertClassName="info" faIcon="fa-info-circle">
          {'Information Message'}
        </Alert>
        <Alert alertClassName="success" faIcon="fa-check-circle">
          {'Success Message'}
        </Alert>
        <Alert
          alertClassName="error"
          faIcon="fa-exclamation-triangle"
          alertCross={false}
        >
          {longMessage}
        </Alert>
      </div>
    );
  }
}
const alert = withInfo(
  `
    #### Types of Alert

      - Error Message 

      - Warning Message

      - Information Message

      - Success Message

      - Display the list of Alerts

    #### Usage
    
      - Alerts should not be used for field level validation - see invalid 
      fields for this. Alerts should be placed at the top of a card or at 
      the top of the page 
    
      - Error alerts should never be dismissible so that a user always knows 
      what they need to do to progress 
    
      - Warning, Info & Success alerts can be dismissible as it does not 
      prevent a user from doing their work 
      
      - Use Error Alerts to denote when an error exists that prevents a user 
      from progressing (Ex: internet offline, 500 error when submitting) 
      
      - Use Warning Alerts for when something important but that does not 
      prevent a user from progressing (Ex: Medium risk or saftey levels)  
    
      - Use Info Alerts for giving users a heads up about something new or 
      a change (Ex: new feature, notification) 
    
      - Use Success Alerts for positive reinforcement after completing a 
      task (Example: screening successfully created, form 100% complete) 
    
    ##### Accessibility

    The error alert should have the appropriate role="alert" attribute.
  `
)(() => <Alerts />);

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('Alert', alert);
