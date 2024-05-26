import './App.css';
import Experience from './pages/experience';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <div className="App page-scroll-container">
        <Home />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
