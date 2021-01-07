import styled from 'styled-components';

export const PageComponent = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const BodyCenterComponent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 414px;
`;

export const BodyComponent = styled.div`
  height: calc(100vh - ${({ noFooter }) => (noFooter ? '90px' : '163px')});
  overflow-y: scroll;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterComponent = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid lightgreen;
`;
