import React from 'react';

import styles from './style';

export default ({ config, ...props }) => {
  let stylesInput = {
    ...styles.input,
    borderColor: config.inputColor1,
    color: config.inputColor2
  };

  switch (config.inputTemplate) {
    case 'full-border':
      stylesInput = {
        ...styles.fullBorderInput,
        ...stylesInput
      };
      break;

    case 'border-bottom':
      stylesInput = {
        ...styles.borderBottomInput,
        ...stylesInput
      };
      break;

    default:
      break;
  }

  return (
    <div>
      {props.label && (
        <label
          style={{
            ...styles.label,
            borderColor: config.inputColor1,
            color: config.inputColor2
          }}
        >
          {props.label}
        </label>
      )}
      <input {...props} style={stylesInput} />
      <style
        dangerouslySetInnerHTML={{
          __html: 'input::placeholder { color: #bbb; font-size: inherit; }'
        }}
      />
    </div>
  );
};
