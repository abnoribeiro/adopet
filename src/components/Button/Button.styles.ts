import styled from 'styled-components';

interface Props {
  variant: string;
  disabled: boolean;
  isLoading: boolean;
}

const ButtonStyles = styled.div<Props>`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button,
  a {
    width: 207px;
    height: 48px;
    border: 1px solid transparent;
    border-radius: 6px;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
    }
  }

  .loading-container {
    svg {
      height: 40px;
    }
  }

  &.smaller {
    button,
    a {
      width: 119px;
      height: 48px;
    }
  }

  &.small {
    button,
    a {
      width: 270px;
      height: 40px;
    }
  }

  &.full {
    width: 100%;
    height: 48px;
    button,
    a {
      width: 100%;
      height: 48px;
    }
  }
`;

export default ButtonStyles;
