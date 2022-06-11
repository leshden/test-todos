import './EnterPanel.css'

const EnterPanel = () => {
  return (
    <div className='enter-todos'>
      <div className='down-pointing-angle-container-todo'>
        <div className='down-pointing-angle-todo'>&#x2771;</div>
      </div>
      <input type="text" className='enter-text-todos' placeholder='What needs to be done?' />
    </div>
  );
}

export default EnterPanel;
