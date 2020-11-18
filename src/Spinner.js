import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// you can make a default prop if we not specify a message 
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;