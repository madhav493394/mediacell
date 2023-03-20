import logo from './logo.svg';
import './App.css';
import { Box, CircularProgress } from '@chakra-ui/react';
import Navbar from './features/navbar/navbar';
import Home from './features/home/home';

function App() {
  return (
    <Box>
      <Navbar />
      <Home/>
    </Box>
  );
}

export default App;
