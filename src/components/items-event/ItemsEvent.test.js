import { render, screen } from '@testing-library/react';
import {TodoContext} from '../../contexts/TodoContext';
import ItemsEvent from './ItemsEvent';

test('render all items ItemsEvent', () => {
  const todos = [{text: 'Test1', active:true}, {text: 'Test2', active:true}];
  const filterTab = 0;
  const value = {todos, filterTab};
  render(
    <TodoContext.Provider value = {value}>
      <ItemsEvent />
    </TodoContext.Provider>
  );

  expect(screen.queryByText(/test1/i)).toBeInTheDocument();
  expect(screen.queryByText(/test2/i)).toBeInTheDocument();
  expect(screen.queryByText(/test3/i)).not.toBeInTheDocument();
});

test('render active items ItemsEvent', () => {
  const todos = [{text: 'Test1', active:false}, {text: 'Test2', active:true}, {text: 'Test3', active:true}];
  const filterTab = 1;
  const value = {todos, filterTab};
  render(
    <TodoContext.Provider value = {value}>
      <ItemsEvent />
    </TodoContext.Provider>
  );

  expect(screen.queryByText(/test1/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/test2/i)).toBeInTheDocument();
  expect(screen.queryByText(/test3/i)).toBeInTheDocument();
});

test('render completed items ItemsEvent', () => {
  const todos = [{text: 'Test1', active:false}, {text: 'Test2', active:true}, {text: 'Test3', active:true}];
  const filterTab = 2;
  const value = {todos, filterTab};
  render(
    <TodoContext.Provider value = {value}>
      <ItemsEvent />
    </TodoContext.Provider>
  );

  expect(screen.queryByText(/test1/i)).toBeInTheDocument();
  expect(screen.queryByText(/test2/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/test3/i)).not.toBeInTheDocument();
});
