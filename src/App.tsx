import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { PersonSection } from './components/Person';

function App() {
  const [latestPID, setLatestPID] = useState(1);
  const [people, setPeople] = useState([{pid: 0}]);

  const savePeople = () => {
    axios.put('http://localhost:3001/people', people)
    console.log("saving people")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        {
        people.map((person, index) => (
          <PersonSection key={index} pid={person.pid} setPeople={setPeople} />
        ))
        }
        <button onClick={() => savePeople()}>Save</button>
      </section>
    </div>
  );
}

export default App;
