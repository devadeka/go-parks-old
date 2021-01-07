import styled from 'styled-components';
import { InputBase, Button, IconButton } from '@material-ui/core';
import MUISearchIcon from '@material-ui/icons/Search';

export const PlateInput = styled(InputBase).attrs({
  inputProps: {
    style: {
      textAlign: 'center',
      fontSize: '26px',
      color: 'green',
      textTransform: 'uppercase',
      fontWeight: 'bolder',
      fontFamily: "'Courier New', monospace",
    },
  },
})`
  flex: 1;
`;

export const PlatContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid green;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
  width: 100%;
  & > div {
    padding: 5px;
  }
`;

export const StateButton = styled(Button)`
  &&& {
    padding: 20px;
    justify-content: center;
    width: 80px;
    margin: 5px;
  }
`;

export const PlateSearch = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

export const PlateState = styled.div`
  &&& {
    font-weight: bolder;
    color: green;
    font-family: 'Courier New', monospace;
    width: 10px;
    font-size: 14px;
    word-wrap: break-word;
  }
`;

export const SearchIcon = styled(MUISearchIcon)`
  &&& {
    fill: white;
  }
`;

export const SearchButton = styled(IconButton)`
  &&& {
    background-color: ${({ disabled }) => (disabled ? 'lightgrey' : 'green')};
  }
`;

export const ParkName = styled.h2`
  width: 100%;
  text-align: center;
`;
