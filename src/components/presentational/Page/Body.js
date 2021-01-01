import React from 'react';
import { BodyCenterComponent, BodyComponent } from './styled';

const Body = ({ children }) => (
  <BodyComponent>
    <BodyCenterComponent>{children}</BodyCenterComponent>
  </BodyComponent>
);

export default Body;
