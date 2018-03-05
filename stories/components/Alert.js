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
  constructor(props) {
    super(props);
    this.state = {
      reasons: [],
      sampleList: [
        {
          activation_date: '1-4-2002',
          activation_reason_code: 'Handguns in house',
        },
        {
          activation_date: '4-5-2003',
          activation_reason_code:
            'Aggressive dog on premises, yard not fenced ',
        },
        {
          activation_date: '5-6-2018',
          activation_reason_code: 'Allergies - Severe peanut, needs epi pen',
        },
      ],
    };
    this.getAlertMessages = this.getAlertMessages.bind(this);
  }
  getAlertMessages() {
    this.state.sampleList.map(item => {
      this.state.reasons.push(item.activation_reason_code);
    });
  }
  componentWillMount() {
    this.getAlertMessages();
  }
  render() {
    return (
      <div>
        <Alert
          alertClassName="error"
          alertMessage="Error Message"
          faIcon="fa-exclamation-triangle"
          alertCross={false}
        />
        <Alert
          alertClassName="warning"
          alertMessage="Warning Message"
          faIcon="fa-warning"
        />
        <Alert
          alertClassName="info"
          alertMessage="Information Message."
          faIcon="fa-info-circle"
        />
        <Alert
          alertClassName="success"
          alertMessage="Success Message."
          faIcon="fa-check-circle"
        />
        <Alert
          alertClassName="error"
          alertMessage={longMessage}
          faIcon="fa-exclamation-triangle"
          alertCross={false}
        />
        <Alert
          alertClassName="warning"
          faIcon="fa-warning"
          alertMessage={this.state.reasons}
          alertCross={false}
        />
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
