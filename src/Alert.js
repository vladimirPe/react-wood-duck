import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
  const classField = `alert-message ${props.alertClassName}-message`;
  const faIcons = `fa ${props.faIcon}`;
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className={classField}>
          <div className="alert-icon">
            <i className={faIcons} />
          </div>
          <div className="alert-text">{props.children}</div>
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
  alertCross: PropTypes.bool,
  children: PropTypes.node,
};

Alert.defaultProps = {
  alertCross: true,
};
export default Alert;
