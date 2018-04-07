import React from 'react';
import cn from 'classnames';
import './spinner.css';

export default class Spinner extends React.Component {
  render() {
    const { visible } = this.props;
    return (
      <div className={cn({
        'spinner-wrapper': true,
        'spinner-hidden': !visible
      })}>
        <svg 
          className="spinner" 
          viewBox="0 0 50 50"
        >
          <circle 
            className="path" 
            cx="25" 
            cy="25" 
            r="20" 
            fill="none" 
            strokeWidth="5"
          ></circle>
        </svg>
      </div>
    );
  }
}