import './App.css';
import { PersonSection } from './components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <PersonSection />
      </section>
    </div>
  );
}

export default App;
