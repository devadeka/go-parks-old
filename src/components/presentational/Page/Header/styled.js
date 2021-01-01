import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const HeaderComponent = styled(AppBar).attrs({
  position: 'static',
})`
  &&& {
    height: 70px;
    padding: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
`;

export const HeaderTitle = styled.h2`
  flex: 1;
`;
export const HeaderButton = styled(IconButton)``;
export const SyncUpIcon = styled(SyncIcon)`
  color: white;
`;
export const LogoutIcon = styled(ExitToAppIcon)`
  color: white;
`;
