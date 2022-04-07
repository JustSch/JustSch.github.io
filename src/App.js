import {HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
