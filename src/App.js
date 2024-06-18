import './App.css';
import { Todo } from './components/Todo';
import { CatGenerator } from './components/CatGenerator';

function App() {
  return (
    <>

      <h1>Lista de tareas</h1>

      <Todo></Todo>


      <h1>Frases de gatos</h1>
      
      <CatGenerator></CatGenerator>
    </>
  );
}

export default App;
