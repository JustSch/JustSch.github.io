import Link from 'next/link'
import About from './About';
import Home from './home'
import NavbarElement from '../NavbarElement'
import Projects from './projects'


function App() {
  return (
    /* <Router>
      <NavbarElement />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>*/
    <Home />
  );
}

export default App;
