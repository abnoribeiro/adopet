import React, { useEffect, useState } from 'react';

// styles
import Wrapper, { InputStyles } from './Input.styles';

interface Props {
  type: string;
  label: string;
  id: string;
  value: string | number;
  name: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'hollow';
  autoComplete?: string;
  callbackFunc?: (field: string, value: string) => void;
  validationMsg?: string;
  dataCy?: string;
  errorMsgdataCy?: string;
}

const Input: React.FC<Props> = ({
  type,
  label,
  id,
  value,
  placeholder,
  required = false,
  readonly = false,
  disabled = false,
  variant = 'primary',
  name,
  callbackFunc = () => '',
  autoComplete = 'off',
  validationMsg = '',
  dataCy = '',
  errorMsgdataCy = '',
}: Props) => {

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleOnChange = (value: string) => {
    callbackFunc(name, value);
    setInputValue(value);
  };

  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <InputStyles
        id={id}
        value={inputValue}
        type={type}
        placeholder={placeholder}
        required={required}
        readOnly={readonly}
        disabled={disabled}
        name={name}
        onChange={(e) => handleOnChange(e.target.value)}
        autoComplete={autoComplete}
        data-cy={dataCy}
      />
      {validationMsg !== '' ? (
        <p data-cy={errorMsgdataCy} className="error-message">
          {validationMsg}
        </p>
      ) : null}
    </Wrapper>
  );
};

export default Input;
