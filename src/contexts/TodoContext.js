import {createContext, useState} from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const value = {todos, setTodos};
  return(
    <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
  );
}
