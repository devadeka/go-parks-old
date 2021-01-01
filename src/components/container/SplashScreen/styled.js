import styled from 'styled-components';
import { PageComponent } from '../../presentational/Page/styled';

export const SplashScreenPage = styled(PageComponent)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: lightgreen;
  }
`;

export const SplashLogo = styled.img`
  max-width: 200px;
`;

export const AppVersion = styled.h2`
  color: white;
`;

export const SplashStatus = styled.h2`
  color: white;
`;
