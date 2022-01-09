import './App.css';
import db from './utils/firebase';
import { TaskInput } from './components/TaskInput';


function App() {
  return (
    <div className='App'>
      <div className='taskListContainer'>
        <h1>TODO</h1>
        <TaskInput />
      </div>
    </div>
  );
}

export default App;
