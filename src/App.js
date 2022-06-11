import './App.css';
import EnterPanel from './components/enter-panel/EnterPanel'
import FooterPanel from './components/footer-panel/FooterPanel';

function App() {
  return (
    <div className="App">
        <div className='title-todos'> todos </div>
        <EnterPanel />
        <FooterPanel />
    </div>
  );
}

export default App;
