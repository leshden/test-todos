import './EnterPanel.css'
import {useState} from 'react';

const EnterPanel = () => {
  const [inputText, setInputText] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(`Enter key, value ${inputText}`);
      setInputText('');
    }
  }

  const onChangeInputText = (e) => {
      setInputText(e.target.value);
  }

  return (
    <div className='enter-todos'>
      <div className='down-pointing-angle-container-todo'>
        <div className='down-pointing-angle-todo'>&#x2771;</div>
      </div>
      <input type="text" className='enter-text-todos' value = {inputText} onChange={onChangeInputText}
             placeholder='What needs to be done? And Enter' onKeyDown={handleKeyDown} />
    </div>
  );
}

export default EnterPanel;
