import logo from './platzi.webp';
import './App.css';

function App() {
  return (

      <TodoItem completed={8} total={11} />

  );
}

function TodoItem(props){
  return(
    <li>
      <span>V</span>
      <p> Completaste {props.completed} de {props.total} tareas</p>
      <span>X</span>
    </li>
  );

}

export default App ;
