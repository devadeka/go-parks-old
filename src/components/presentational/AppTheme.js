import { createMuiTheme } from '@material-ui/core/styles';
import Green from '@material-ui/core/colors/green';
import Lime from '@material-ui/core/colors/lime';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: Green[700],
    },
    secondary: {
      main: Lime[500],
    },
  },
});
