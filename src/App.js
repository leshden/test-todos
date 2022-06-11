import './App.css';
import EnterPanel from './components/enter-panel/EnterPanel'
import FooterPanel from './components/footer-panel/FooterPanel';
import ItemsEvent from './components/items-event/ItemsEvent';
import {TodoProvider} from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
        <div className='title-todos'> todos </div>
        <TodoProvider>
          <EnterPanel />
          <ItemsEvent />
          <FooterPanel />
        </TodoProvider>
    </div>
  );
}

export default App;
