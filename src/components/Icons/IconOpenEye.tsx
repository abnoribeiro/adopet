import React from 'react';

interface Props {
  className?: string;
}

const IconOpenEye = React.memo<Props>(() => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 4.59314C3.9375 4.59314 1.3125 10.5 1.3125 10.5C1.3125 10.5 3.9375 16.4056 10.5 16.4056C17.0625 16.4056 19.6875 10.5 19.6875 10.5C19.6875 10.5 17.0625 4.59314 10.5 4.59314Z"
      stroke="#727D83"
      strokeWidth="1.3125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 13.7814C12.3122 13.7814 13.7812 12.3123 13.7812 10.5001C13.7812 8.68794 12.3122 7.21887 10.5 7.21887C8.68782 7.21887 7.21875 8.68794 7.21875 10.5001C7.21875 12.3123 8.68782 13.7814 10.5 13.7814Z"
      stroke="#727D83"
      strokeWidth="1.3125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

IconOpenEye.displayName = 'IconOpenEye';

export default IconOpenEye;
export { IconOpenEye };
