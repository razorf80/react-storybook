import React from 'react';
import PropTypes from 'prop-types';

import {StyledButton} from './Styles';

const Button=({onClick, disabled, ...props}) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {props.children}
  </StyledButton>
)

Button.propTypes = {
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}

export default Button;