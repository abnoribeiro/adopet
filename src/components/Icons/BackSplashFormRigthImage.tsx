import React from 'react';

interface Props {
  className?: string;
}

const BackSplashFormRigthImage = React.memo<Props>(({className=''}) => (
  <svg className={className} width="71" height="417" viewBox="0 0 71 417" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.2283 154.5C23.0283 94.1 64.2283 37 85.7283 16V397.5C12.9283 376.3 3.03751 324.784 22.7282 295.5C53.9955 249 37.4283 214.9 30.2283 154.5Z" fill="#36D6AD"/>
    <path d="M85.7283 1C50.4999 21 7.49993 95.5 14.2283 154.5C20.9566 213.5 43.6071 236.095 14.2283 286.5C-12.0001 331.5 -1.07174 392.8 85.7283 416M85.7283 16C64.2283 37 23.0283 94.1 30.2283 154.5C37.4283 214.9 53.9955 249 22.7282 295.5C3.03751 324.784 12.9283 376.3 85.7283 397.5V16Z" stroke="#36D6AD" stroke-width="2"/>
  </svg>

));

BackSplashFormRigthImage.displayName = 'BackSplashFormRigthImage';

export default BackSplashFormRigthImage;
export { BackSplashFormRigthImage };
