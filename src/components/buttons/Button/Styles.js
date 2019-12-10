import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({theme, disabled=false}) => disabled? theme.colorGreyXxxLight : theme.colorWhite};
  border: ${({theme}) => `1px solid ${theme.colorBorder}`};
  font-size: ${({theme}) => theme.fontSizeSmall};
  color: ${({theme}) => theme.colorPrimary};
`