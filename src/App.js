import {HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavbarElement from './NavbarElement'
import Projects from './Projects'


function App() {
  return (
    <Router>
      <NavbarElement />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
