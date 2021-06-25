import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter initial={0} max={100}/>
    </div>
  );
}

export default App;
