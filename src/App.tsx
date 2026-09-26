import Navbar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
