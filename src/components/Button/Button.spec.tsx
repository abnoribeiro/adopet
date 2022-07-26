import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (
  type: 'button' | 'submit',
  children: string | React.ReactNode,
  size: 'small' | 'medium' | 'big' | 'full',
  callbackFunc: () => void,
) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <Button type={type} size={size} callbackFunc={callbackFunc}>
          {children}
        </Button>
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('Button test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render a button, and exec a function when clicks: ', () => {
    const type = 'button';
    const children = 'Enviar';
    const size = 'small';
    const callbackFunction = () => console.log('Button clicked');
    const consoleSpy = jest.spyOn(console, 'log');
    const { renderComp } = createSut(type, children, size, callbackFunction);

    renderComp();

    fireEvent.click(screen.getByRole('button', { name: children }));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
