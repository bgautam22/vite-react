import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MedicalDashboard from './components/MedicalDashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MedicalDashboard />
    </ThemeProvider>
  );
}

export default App;
