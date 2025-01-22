import flag from '../assets/img/flag_of_ukraine.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={flag} className="flag" alt="flag of Ukraine"/>
            <p>
                Hello World!
            </p>
        </header>
    </div>
  );
}

export default App;