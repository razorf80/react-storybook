import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({theme}) => theme.colorWhite};
  border: ${({theme}) => `1px solid ${theme.colorBorder}`};
  font-size: ${({theme}) => theme.fontSizeSmall};
  color: ${({theme}) => theme.colorPrimary};
`