import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import Header from '../../presentational/Header';
import Body from '../../presentational/Page/Body';
import {
  PageComponent,
  FooterComponent,
} from '../../presentational/Page/styled';
import { PlateInput, PlatContainer } from './styled';

const PlateCheckScreen = () => {
  return (
    <PageComponent>
      <Header />
      <Body>
        <PlatContainer>
          <div>
            <PlateInput />
            <IconButton style={{ backgroundColor: 'green' }}>
              <SearchIcon />
            </IconButton>
          </div>
        </PlatContainer>
        <div style={{ width: '100%', display: 'flex' }}>
          NSW VIC QLD TAS SA NT WA
        </div>
      </Body>
      <FooterComponent></FooterComponent>
    </PageComponent>
  );
};

export default PlateCheckScreen;
