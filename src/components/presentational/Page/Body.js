import React from 'react';
import { BodyCenterComponent, BodyComponent } from './styled';

const Body = ({ children, noFooter }) => (
  <BodyComponent noFooter={noFooter}>
    <BodyCenterComponent>{children}</BodyCenterComponent>
  </BodyComponent>
);

export default Body;
