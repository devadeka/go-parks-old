import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const SelectButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  size: 'large',
})`
  &&& {
    color: white;
    height: 50px;
    width: 350px;
    border-radius: 30px;
  }
`;
