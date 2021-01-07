import { ThemeProvider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { theme } from './components/presentational/AppTheme';
import ParkSelectScreen from './components/container/ParkSelectScreen';
import SplashScreen from './components/container/SplashScreen';
import PlateCheckScreen from './components/container/PlateCheckScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={SplashScreen} exact />
        <Route path="/park_select" component={ParkSelectScreen} expact />
        <Route path="/park/:parkId" component={PlateCheckScreen} expact />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
