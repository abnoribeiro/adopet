import { IconOpenEye, IconCloseEye } from '../Icons';

import React, { useState } from 'react';
import {
  ErrorMessage,
  FieldInput,
  InputContainer,
  InputLabel,
  ShowPasswordButton,
  Wrapper,
} from './InputRounded.styles';

interface Props {
  type?: string;
  label: string;
  value: string;
  showPasswordToggle?: boolean;
  transFormType?: 'uppercase' | 'lowercase' | 'capitalize';
  placeholder: string;
  fullWidth?: boolean;
  touched: boolean | undefined;
  error: string | undefined;
  onFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFieldBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  passwordToggleDataCy?: string;
  inputDataCy?: string;
  errorDataCy?: string;
}

const InputRounded: React.FC<Props> = ({
  value = '',
  label,
  type = 'text',
  onFieldChange,
  transFormType,
  onFieldBlur,
  placeholder,
  fullWidth,
  touched,
  error,
  showPasswordToggle,
  name,
  onKeyDown,
  autoComplete,
  passwordToggleDataCy,
  inputDataCy,
  errorDataCy,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState('');

  const handleInputType = () => {
    if (type === 'password' && showPassword) {
      return 'text';
    }

    return type;
  };

  return (
    <Wrapper fullWidth={fullWidth}>
      <InputContainer
        isFocused={focusedInput === name}
        showError={!!(touched && error)}
      >
        <InputLabel>{label}</InputLabel>
        <FieldInput
          onFocus={() => setFocusedInput(name)}
          transFormType={transFormType}
          onBlur={(event) => {
            setFocusedInput('');
            !!onFieldBlur && onFieldBlur(event);
          }}
          placeholder={placeholder}
          value={value}
          type={handleInputType()}
          onChange={(e) => {
            onFieldChange(e);
          }}
          onKeyDown={onKeyDown}
          autoComplete={autoComplete}
          data-cy={inputDataCy}
        />
        {showPasswordToggle && (
          <ShowPasswordButton
            onClick={() => setShowPassword((prevState) => !prevState)}
            data-cy={passwordToggleDataCy}
          >
            {showPassword ? <IconOpenEye /> : <IconCloseEye />}
          </ShowPasswordButton>
        )}
      </InputContainer>

      {touched && !!error && (
        <ErrorMessage
          dangerouslySetInnerHTML={{
            __html: error,
          }}
          data-cy={errorDataCy}
        />
      )}
    </Wrapper>
  );
};

export default InputRounded;
