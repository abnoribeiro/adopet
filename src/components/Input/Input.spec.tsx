import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (
  id: string,
  label: string,
  name: string,
  type: string,
  placeholder: string,
  value: string,
  validationMsg: string,
) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <Input
          id={id}
          label={label}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          validationMsg={validationMsg}
        />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('Input test', () => {
  it('should changes the value when exec onChange function:', () => {
    const value = 'teache@email.com';
    const error = '';

    const { renderComp } = createSut(
      'email',
      'E-mail:',
      'email',
      'text',
      'Insira o E-mail:',
      value,
      error,
    );

    renderComp();

    const Input = screen.getByPlaceholderText('Insira o E-mail:');

    fireEvent.change(Input, {
      target: { value: 'novoemail@email.com' },
    });

    expect(Input.getAttribute('value')).toBe('novoemail@email.com');
  });

  it('should show an error when pass it:', () => {
    const value = 'teache@email.com';
    const error = 'Revise sua senha!';

    const { renderComp } = createSut(
      'email',
      'Senha:',
      'email',
      'text',
      'Insira sua senha:',
      value,
      error,
    );

    renderComp();

    expect(screen.getAllByText('Revise sua senha!'));
  });
});
