import './App.css';
import Logo from './componentes/Logo';
import TaskList from './componentes/TaskList';

function App() {
  return (
    <div className="App">
      <Logo css='logo' alt='Logo de freecodecamp' />
      <div className='todo-list-main'>
        <h1>TODO List</h1>
        <TaskList />

      </div>
    </div>
  );
}

export default App;
