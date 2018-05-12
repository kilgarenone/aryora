import styled from 'react-emotion';

const Input = styled('input')`
  padding: 0.4em 0.7em;
  font-size: 18px;
  margin: 0;
  margin-right: 8px;
  height: 42px;
  border: 1px solid #bdbdbd;
  border-radius: 0.25em;
  &:focus {
    border-color: #2962ff;
  }
  &:required {
    box-shadow: none;
  }
`;

export default Input;
