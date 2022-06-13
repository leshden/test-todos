import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemEvent from './ItemEvent';
import {TodoContext} from '../../contexts/TodoContext';

test('render ItemEvent', () => {
  const todos = [{text: 'Test1', active:true}, {text: 'Test2', active:true}];
  const todo = {text: 'Test', active:true};

  const value = {todos};
  render(
    <TodoContext.Provider value = {value}>
      <ItemEvent value={todo} key={todo.text} />
    </TodoContext.Provider>
  );

  expect(screen.queryByText(/test/i)).toBeInTheDocument();
});

test('change status ItemEvent', () => {
  const setTodos = jest.fn();
  const todos = [{text: 'Test1', active:true}, {text: 'Test2', active:true}];
  const todo = {text: 'Test', active:true};
  const value = {todos, setTodos};
  render(
    <TodoContext.Provider value = {value}>
      <ItemEvent value={todo} key={todo.text} />
    </TodoContext.Provider>
  );

  const status = screen.queryByRole(/change-status/i)
  expect(status).toBeInTheDocument();

  const markTxt = 'item-mark-todo-active';
  expect(status).toHaveClass(markTxt);

  userEvent.click(status);
  expect(status).not.toHaveClass(markTxt);

  userEvent.click(status);
  expect(status).toHaveClass(markTxt);
});
