import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'



function App() {
  return (
    <main className="App">
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/aboutme" element={<AboutMe/>}  />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      </>
    </main>
  );
}

export default App;
