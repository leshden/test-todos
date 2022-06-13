import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FooterPanel from './FooterPanel';
import {TodoProvider, TodoContext} from '../../contexts/TodoContext';

test('render FooterPanel', () => {
  render(
    <TodoProvider>
      <FooterPanel />
    </TodoProvider>
  );

  expect(screen.getByText(/clear/i)).toBeInTheDocument();
});

test('counter of active items FooterPanel', () => {
  const todos = [{text: 'Test1', active:true}, {text: 'Test2', active:true}];
  const value = {todos};
  render(
    <TodoContext.Provider value = {value}>
      <FooterPanel />
    </TodoContext.Provider>
  );

  const countItems = screen.getByText(/items left/i);
  expect(countItems).toBeInTheDocument();
  expect(countItems).toHaveTextContent('2 items left');
});
