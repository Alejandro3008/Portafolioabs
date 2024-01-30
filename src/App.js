import { Routes, Route, HashRouter} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ColorProvider } from './context/ColorContext';
import { Portfolio } from './pages/Portfolio';
import { Projectrickandmorty } from './pages/Projectrickandmorty';

function App() {
  return (
    <>
      <ThemeProvider>
      <ColorProvider>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Portfolio/>}/>
          <Route exact path='/Rick&Morty' element={<Projectrickandmorty/>}/>
        </Routes>
      </HashRouter>
      </ColorProvider>
      </ThemeProvider>
      <p className="hidden">Portafolio</p>
    </>
  );
}

export default App;
