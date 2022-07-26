import styled from 'styled-components';
interface InputProps {
  showError?: boolean;
  isFocused?: boolean;
  transFormType?: 'uppercase' | 'lowercase' | 'capitalize';
}

interface Props {
  fullWidth?: boolean;
}

export const Wrapper = styled.div<Props>`
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div<InputProps>`
  position: relative;
  width: 100%;
  margin-top: ${({ theme }) => `${theme.spacing.small.bigger}`};
  height: ${({ theme }) => `${theme.spacing.mid.little}`};
  border: 1px solid
    ${({ showError, isFocused }) =>
      showError ? '#E0245E' : isFocused ? '#1DA1F2' : '#c1c1c1'};
  border-radius: ${({ theme }) => theme.borders.radius.xs};
  padding: ${({ theme }) =>
    `${theme.spacing.small.medium} ${theme.spacing.small.great}`};
  color: ${({ theme }) => theme.colors.secondaryColorLight};
  font-size: ${({ theme }) => theme.fonts.fontSize.sm};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.light};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xs};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  input:placeholder-shown {
    font-style: italic;
  }
`;

export const InputLabel = styled.label`
  padding: ${({ theme }) => theme.spacing.small.little};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.fontSize.xs};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
  height: 22px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  line-height: ${({ theme }) => theme.fonts.lineHeight.xs};
  top: 0;
  left: ${({ theme }) => theme.spacing.small.little};
  transform: translateY(-60%);
`;

export const FieldInput = styled.input<InputProps>`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryColorLight};

  text-transform: ${({ transFormType }) =>
    transFormType ? transFormType : 'none'};

  ::-webkit-input-placeholder {
    text-transform: initial;
  }

  :-moz-placeholder {
    text-transform: initial;
  }

  ::-moz-placeholder {
    text-transform: initial;
  }

  :-ms-input-placeholder {
    text-transform: initial;
  }

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }
`;

export const ErrorMessage = styled.div`
  color: #e0245e;
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fonts.fontSize.sm};
  font-family: Lato;
`;

export const ShowPasswordButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin: 0 !important;
  height: 21px;
`;
