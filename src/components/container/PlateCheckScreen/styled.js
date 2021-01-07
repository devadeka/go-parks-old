import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

export const PlateInput = styled(InputBase).attrs({
  inputProps: {
    style: {
      textAlign: 'center',
      fontSize: '26px',
      color: 'green',
      textTransform: 'uppercase',
      fontWeight: 'bolder',
    },
  },
})`
  flex: 1;
`;

export const PlatContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid green;
  width: 100%;
  & > div {
    padding: 5px;
  }
`;
