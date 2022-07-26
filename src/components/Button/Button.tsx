import React from 'react';
import { Link } from 'react-router-dom';

// styles
import ButtonStyles from './Button.styles';

interface Props {
  type: 'button' | 'submit';
  href?: string;
  children: string | React.ReactNode;
  size?: 'smaller' | 'small' | 'medium' | 'big' | 'full';
  callbackFunc?: () => void;
  variant?: 'primaryLight' | 'secondaryLight' | 'tertiaryLight';
  disabled?: boolean;
  external?: boolean;
  dataCy?: string;
  isLoading?: boolean;
}

type ButtonLinkProps = Pick<
  Props,
  'external' | 'href' | 'children' | 'disabled' | 'dataCy'
> & {
  href: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  external,
  href,
  children,
  disabled,
  dataCy,
}: ButtonLinkProps) => {
  return external ? (
    <a
      href={disabled ? '#' : href}
      target={disabled ? '' : '_blank'}
      rel="noreferrer"
      className={disabled ? 'disabled' : ''}
      data-cy={dataCy}
    >
      {children}
    </a>
  ) : (
    <Link
      data-cy={dataCy}
      to={disabled ? '#' : href}
      className={disabled ? 'disabled' : ''}
    >
      {children}
    </Link>
  );
};

const Button: React.FC<Props> = ({
  type,
  children,
  size = 'small',
  callbackFunc = () => '',
  variant = 'primaryLight',
  href,
  disabled = false,
  external = false,
  dataCy = '',
  isLoading = false,
}: Props) => {

  const handleOnClick = () => callbackFunc();

  return (
    <ButtonStyles
      disabled={disabled}
      variant={variant}
      isLoading={isLoading}
    >
      {!href ? (
        <button
          disabled={disabled}
          type={type}
          className={disabled ? 'disabled' : ''}
          onClick={handleOnClick}
          data-cy={dataCy}
        >
          {isLoading ? (
            <div className="loading-container">

            </div>
          ) : (
            children
          )}
        </button>
      ) : (
        <ButtonLink
          dataCy={dataCy}
          disabled={disabled}
          external={external}
          href={href}
        >
          {children}
        </ButtonLink>
      )}
    </ButtonStyles>
  );
};

export default React.memo(Button);
