import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import GlobalStyle from './globalStyles';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();

  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </AnimatePresence>
    </Section>
  );
}

export default App;
