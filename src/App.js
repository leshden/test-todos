import './App.css';
import EnterPanel from './components/enter-panel/EnterPanel'

function App() {
  return (
    <div className="App">
        <div className='title-todos'> todos </div>
        <div className='enter-todos'>
          <div className='down-pointing-angle-container-todo'>
            <div className='down-pointing-angle-todo'>&#x2771;</div>
          </div>
          <input type="text" className='enter-text-todos' placeholder='What needs to be done?' />
        </div>
        <EnterPanel />
    </div>
  );
}

export default App;
