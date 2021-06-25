import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter initial={999} max={1000}/>
    </div>
  );
}

export default App;
