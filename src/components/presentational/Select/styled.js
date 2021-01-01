import styled from 'styled-components';
import MUISelect from '@material-ui/core/Select';
import MUIMenuItem from '@material-ui/core/MenuItem';
import MUIFormControl from '@material-ui/core/FormControl';

export const Select = styled(MUISelect)``;
export const MenuItem = styled(MUIMenuItem)``;
export const FormControl = styled(MUIFormControl)`
  &&& {
    width: 100%;
    margin-top: 150px;
  }
`;
