'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  label: {
    position: 'relative',
    display: 'inline-flex',
    cursor: 'pointer'
  },
  labelFocused: {},

  checkbox: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '0px',
    height: '0px',
    opacity: '0',
    zIndex: '-1'
  },

  text: {
    display: 'inline-block',
    paddingRight: '5px'
  },

  container: {
    position: 'relative',
    display: 'inline-block',
    margin: '0px 10px',
    borderRadius: '2.5px',
    width: '30px',
    height: '20px'
  },
  rail: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    borderRadius: '10px',
    width: '100%',
    height: 'calc(100% * 2 / 3)',
    backgroundColor: '#777',
    opacity: '0.1',
    transition: '.1s 0s ease-in-out'
  },
  ball: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    margin: 'auto',
    transform: 'translateX(-50%)',
    borderRadius: '50%',
    width: 'calc(100% * 2 / 3)',
    height: '100%',
    backgroundColor: '#777',
    transition: '.1s 0s ease-in-out'
  },

  railChecked: {
    backgroundColor: '#449d44'
  },
  ballChecked: {
    left: '100%',
    backgroundColor: '#449d44'
  }
};