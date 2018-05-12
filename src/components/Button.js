import styled from 'react-emotion';
import { spinnerCssClass } from './Spinner';

const Button = styled('button')`
  position: relative;
  font-size: 1em;
  font-weight: 700;
  background-color: #212121;
  color: #fff;
  height: 42px;
  padding: 0 20px;
  border-radius: 0.2em;
  border: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:disabled {
    opacity: 0.75;
  }
  ${props => (props.isSubmitting ? spinnerCssClass : '')};
`;

export default Button;
