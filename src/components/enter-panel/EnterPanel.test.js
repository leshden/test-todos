import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TodoProvider} from '../../contexts/TodoContext';

import EnterPanel from './EnterPanel';

test('render EnterPanel', () => {
  render(
    <TodoProvider>
      <EnterPanel />
    </TodoProvider>
  );

  const linkElement = screen.getByPlaceholderText(/what needs/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeEmptyDOMElement();
});

test('focus EnterPanel', () => {
  render(
    <TodoProvider>
      <EnterPanel />
    </TodoProvider>
  );

  const inputElement = screen.getByPlaceholderText(/what needs/i);
  expect(inputElement).not.toHaveFocus();
  inputElement.focus();
  expect(inputElement).toHaveFocus();
});

test('input text EnterPanel', () => {
  render(
    <TodoProvider>
      <EnterPanel />
    </TodoProvider>
  );

  const inputElement = screen.getByPlaceholderText(/what needs/i);
  expect(inputElement).not.toHaveFocus();
  inputElement.focus();
  expect(inputElement).toHaveFocus();
  const text = 'Test{enter}';
  userEvent.type(inputElement, text);
  expect(inputElement.value).toBe('');
});
