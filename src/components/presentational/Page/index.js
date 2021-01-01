import styled from 'styled-components';
import { PageComponent, BodyComponent } from './styled';

export const Page = ({ children }) => <PageComponent>{children}</PageComponent>;
export const PageBody = ({ children }) => (
  <BodyComponent>{children}</BodyComponent>
);
