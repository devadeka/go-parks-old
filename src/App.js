import { Route, Switch } from 'react-router-dom';
import ParkSelectScreen from './components/container/ParkSelectScreen';
import SplashScreen from './components/container/SplashScreen';

function App() {
  return (
    <Switch>
      <Route path="/" component={SplashScreen} exact />
      <Route path="/park_select" component={ParkSelectScreen} expact />
    </Switch>
  );
}

export default App;
