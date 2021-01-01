import styled from 'styled-components';

export const PageComponent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyComponent = styled.div`
  width: 100%;
  max-width: 414px;
  overflow-y: scroll;
  flex: 1;
  background-color: yellow;
`;

export const FooterComponent = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid lightgreen;
`;
