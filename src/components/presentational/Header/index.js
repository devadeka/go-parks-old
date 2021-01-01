import React from 'react';
import {
  HeaderTitle,
  HeaderComponent,
  HeaderButton,
  SyncUpIcon,
  LogoutIcon,
} from './styled';

const Header = () => (
  <HeaderComponent>
    <HeaderTitle>GoParks</HeaderTitle>
    <HeaderButton>
      <SyncUpIcon />
    </HeaderButton>
    <HeaderButton>
      <LogoutIcon />
    </HeaderButton>
  </HeaderComponent>
);
export default Header;
