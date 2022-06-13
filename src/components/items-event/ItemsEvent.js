import {useContext} from 'react';
import {TodoContext} from '../../contexts/TodoContext';
import ItemEvent from '../item-event/ItemEvent';

const ItemsEvent = () => {
  const {todos, filterTab} = useContext(TodoContext);

  const filterTodos = todos.filter(item => {
    if (filterTab === 0) {
      return true;
    } else {
      return filterTab === 1 ? item.active === true : item.active === false;
    }
  });

  return (
    filterTodos.map(todo => {
      return ( <ItemEvent value={todo} key={todo.text} />)
    })
  );
}

export default ItemsEvent;
