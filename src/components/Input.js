import styled from 'react-emotion';

const Input = styled('input')`
  padding: 0.4em 0.7em;
  font-size: 18px;
  margin: 0;
  margin-right: 8px;
  height: 42px;
  border: 2px solid #e0e0e0;
  border-radius: 0.2em;

  &:focus {
    border-width: 2px;
    border-color: #2962ff;
  }

  &:required {
    box-shadow: none;
  }
`;

export default Input;
