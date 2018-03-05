import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
  const classField = `alert-message ${props.alertClassName}-message`;
  const faIcons = `fa ${props.faIcon}`;
  const messageData = () => {
    if (Array.isArray(props.alertMessage)) {
      return props.alertMessage.map((item, i) => <p key={i}> {item}</p>);
    } else {
      return props.alertMessage;
    }
  };
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className={classField}>
          <div className="alert-icon">
            <i className={faIcons} />
          </div>
          <div className="alert-text">{messageData()}</div>
          {props.alertCross && (
            <div className="alert-cross">
              <i className="fa fa-times" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  alertClassName: PropTypes.string,
  faIcon: PropTypes.string,
  alertMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.Array]),
  alertCross: PropTypes.bool,
};

Alert.defaultProps = {
  alertCross: true,
};
export default Alert;
