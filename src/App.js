import './App.css';
import Saludo from './components/Saludo';
import Metodos from './components/Metodos';

function App() {
  return (
    <div className='App'>
      <Metodos/>
      <Saludo nombre="Sergio" edad="20"/>
    </div>
  );
}

export default App;
