import styled from 'styled-components';

const ButtonStyles = styled.button`
  width: 100%;
  height: 40px;

  font-size: 16px;
  font-weight: 600;

  background: #E02041;
  color: #F0F0F5;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  transition: all .2s;

  margin-top: 15px;

  &:hover {
    background: #E33654;
  }
`;

export default ButtonStyles;
