import React from 'react';

interface Props {
  className?: string;
}

const IconCloseEye = React.memo<Props>(() => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.9375 3.28137L17.0625 17.7189"
      stroke="#727D83"
      strokeWidth="1.3125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.707 12.928C12.0631 13.5133 11.213 13.8189 10.3438 13.7774C9.4746 13.736 8.65744 13.351 8.07208 12.7071C7.48672 12.0632 7.18111 11.2132 7.22246 10.344C7.26381 9.47475 7.64875 8.65756 8.29259 8.07214"
      stroke="#727D83"
      strokeWidth="1.3125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.06986 5.62695C2.7255 7.32053 1.3125 10.5001 1.3125 10.5001C1.3125 10.5001 3.9375 16.4057 10.5 16.4057C12.0376 16.418 13.556 16.0638 14.9295 15.3726"
      stroke="#727D83"
      strokeWidth="1.3125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.1118 13.8715C18.9003 12.2696 19.6868 10.5 19.6868 10.5C19.6868 10.5 17.0618 4.59315 10.4993 4.59315C9.93095 4.59222 9.36347 4.63843 8.80273 4.73131"
      stroke="#727D83"
      strokeWidth="1.3125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1182 7.27686C11.8156 7.41077 12.4508 7.7672 12.9284 8.29268C13.4061 8.81815 13.7006 9.48434 13.7676 10.1913"
      stroke="#727D83"
      strokeWidth="1.3125"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

IconCloseEye.displayName = 'IconCloseEye';

export default IconCloseEye;
export { IconCloseEye };
