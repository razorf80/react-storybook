import React from 'react';
import {StyledButton} from './Styles';

const Button=({...props}) => (
  <StyledButton onClick={props.onClick}>
    {props.children}
  </StyledButton>
)

export default Button;