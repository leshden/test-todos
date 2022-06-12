import {createContext, useState} from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
  const [filterTab, setFilterTab] = useState(0);

  const value = {todos, setTodos, filterTab, setFilterTab};
  return(
    <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
  );
}
