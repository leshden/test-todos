import './App.css';
import EnterPanel from './components/enter-panel/EnterPanel'
import FooterPanel from './components/footer-panel/FooterPanel';
import ItemEvent from './components/item-event/ItemEvent';

function App() {
  return (
    <div className="App">
        <div className='title-todos'> todos </div>
        <EnterPanel />
        <ItemEvent />
        <FooterPanel />
    </div>
  );
}

export default App;
