import * as React from 'react';
import Header from './components/Header.js'

import { ThemeProvider, createTheme } from '@mui/system';

  const theme = {
      palette: {
          header : {
            height: 'auto',
            bgcolor: '#CCC',
          },
       },
  };

function App() {
  return (
    <>
      <Header style={{backgroundColor:'#FFF'}}theme={theme} />
    </>
  );
}

export default App;
