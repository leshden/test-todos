import './EnterPanel.css'
import {useState, useContext} from 'react';
import {TodoContext} from '../../contexts/TodoContext';

const EnterPanel = () => {
  const [inputText, setInputText] = useState('');
  const {todos, setTodos} = useContext(TodoContext);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTodos((todos) => [...todos, {text: inputText, active: true}]);
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
