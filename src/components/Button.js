import styled from 'react-emotion';

const Button = styled('button')`
  font-size: 1em;
  font-weight: 700;
  font-style: bold;
  background-color: #212121;
  color: #fff;
  height: 42px;
  padding: 0 20px;
  border-radius: 0.25em;
  border: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  text-align: center;

  &.isSubmitting {
    background-color: red;
  }
`;

export default Button;
