'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  wrapper: {
    display: 'block',
    width: '100%'
  },

  label: {
    display: 'block',
    width: '100%',
    fontSize: '0.7em'
  },

  selectWrapper: {
    position: 'relative'
  },

  selectArrow: {
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)'
  },

  select: {
    position: 'relative',
    display: 'block',
    padding: '7px 30px 7px 5px',
    width: '100%',

    color: '#020302',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    cursor: 'pointer',
    appearance: 'button',
    WebkitAppearance: 'button',
    MozAppearance: 'button',
    borderRadius: '0px',
    userSelect: 'none',
    background: 'transparent',

    overflow: 'hidden',
    transition: '0.18s'
  },

  selectDisabled: {
    opacity: '0.2'
  },

  fullBorderSelect: {
    color: 'inherit',
    borderColor: 'inherit',
    borderWidth: '2px',
    borderStyle: 'solid'
  },

  borderBottomSelect: {
    color: 'inherit',
    borderColor: 'inherit',
    borderWidth: '0',
    borderBottom: '2px solid'
  }
};