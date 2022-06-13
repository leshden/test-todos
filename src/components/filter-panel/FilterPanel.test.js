import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterPanel from './FilterPanel';
import {TodoProvider} from '../../contexts/TodoContext';

test('render FilterPanel', () => {
  render(
    <TodoProvider>
      <FilterPanel />
    </TodoProvider>
  );

  expect(screen.getByText(/all/i)).toBeInTheDocument();
  expect(screen.getByText(/active/i)).toBeInTheDocument();
  expect(screen.getByText(/completed/i)).toBeInTheDocument();
});

test('handle buttons FilterPanel', () => {
  render(
    <TodoProvider>
      <FilterPanel />
    </TodoProvider>
  );

  const buttonAll = screen.getByText(/all/i);
  const buttonActive = screen.getByText(/active/i);
  const buttonCompleted = screen.getByText(/completed/i);
  const borderTxt = 'filter-border-todo';

  expect(buttonAll).toHaveClass(borderTxt);
  expect(buttonActive).not.toHaveClass(borderTxt);
  expect(buttonCompleted).not.toHaveClass(borderTxt);

  userEvent.click(buttonActive);

  expect(buttonAll).not.toHaveClass(borderTxt);
  expect(buttonActive).toHaveClass(borderTxt);
  expect(buttonCompleted).not.toHaveClass(borderTxt);

  userEvent.click(buttonCompleted);

  expect(buttonAll).not.toHaveClass(borderTxt);
  expect(buttonActive).not.toHaveClass(borderTxt);
  expect(buttonCompleted).toHaveClass(borderTxt);

});
