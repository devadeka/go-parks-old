import React from 'react';
import Header from '../../presentational/Page/Header';
import {
  PageComponent,
  BodyComponent,
  FooterComponent,
} from '../../presentational/Page/styled';
import { SelectButton } from './styled';

const ParkSelect = () => (
  <PageComponent>
    <Header />
    <BodyComponent></BodyComponent>
    <FooterComponent>
      <SelectButton>SELECT</SelectButton>
    </FooterComponent>
  </PageComponent>
);

export default ParkSelect;
