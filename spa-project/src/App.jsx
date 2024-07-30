import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { LoginPage } from './pages/LoginPage';
import { TablePage } from './pages/TablePage';
import { ThemeProvider, Container } from '@mui/material';
import { Apptheme } from './Apptheme';

function App() {
  return (
    <>
      <ThemeProvider theme={Apptheme}>
        <Header></Header>
        <Container sx={{
          marginTop: '80px'
        }} maxWidth='xl'></Container>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path='/table' element={<TablePage />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
