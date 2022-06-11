import {useContext} from 'react';
import {TodoContext} from '../../contexts/TodoContext';
import ItemEvent from '../item-event/ItemEvent';

const ItemsEvent = () => {
  const {todos} = useContext(TodoContext);

  return (
    todos.map(todo => {
      console.log(todo);
      return ( <ItemEvent value={todo} key={todo.text} />)
    })
  );
}

export default ItemsEvent;
