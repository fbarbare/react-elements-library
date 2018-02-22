import React from 'react';

import Icon from '../Icon';

import styles from './style';

export default ({ config, options, label, placeholder, ...props }) => {
  const stylesColor = {
    borderTopColor: config.inputColor1,
    borderBottomColor: config.inputColor1,
    borderLeftColor: config.inputColor1,
    borderRightColor: config.inputColor1,
    color: config.inputColor2
  };

  let stylesSelect = {};

  switch (config.inputTemplate) {
    case 'full-border':
      stylesSelect = {
        ...styles.select,
        ...styles.fullBorderSelect,
        ...(props.disabled ? styles.selectDisabled : {}),
        ...stylesColor
      };
      break;

    case 'border-bottom':
      stylesSelect = {
        ...styles.select,
        ...styles.borderBottomSelect,
        ...(props.disabled ? styles.selectDisabled : {}),
        ...stylesColor
      };
      break;

    default:
      stylesSelect = {
        ...stylesColor
      };
      break;
  }

  if (typeof options === 'number') {
    const numberOptions = options > 0 ? options + 1 : 0;

    options = [];
    while (options.length !== numberOptions) {
      options.push({ value: options.length });
    }
  }

  return (
    <div
      className={`select__${config.inputTemplate}`}
      style={{ ...styles.wrapper, ...stylesColor }}
    >
      <label>
        {label && <div style={{ ...styles.label, ...stylesColor }}>{label}</div>}

        <div style={styles.selectWrapper}>
          <span style={{ ...styles.selectArrow, color: config.inputColor1 }} aria-hidden="true">
            <Icon type="FaAngleDown" />
          </span>

          <select {...props} style={stylesSelect}>
            {placeholder && (
              <option value="" disabled defaultValue>
                {placeholder}
              </option>
            )}
            {options.map(({ value, text, defaultValue = false }) => (
              <option
                key={`select-${props.name}-${value}`}
                value={value}
                defaultValue={defaultValue === props.defaultValue}
              >
                {text || value}
              </option>
            ))}
          </select>
        </div>
      </label>
    </div>
  );
};
