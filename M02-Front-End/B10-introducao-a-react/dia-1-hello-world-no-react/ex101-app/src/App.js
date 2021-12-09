import './App.css';

const array = ['compromissos1', 'compromissos2', 'compromissos3', 'compromissos4'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    array.map((item) => Task(item))
    
  );
}

export default App;
