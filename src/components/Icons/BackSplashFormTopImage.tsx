import React from 'react';

interface Props {
  className?: string;
}

const BackSplashFormTopImage = React.memo<Props>(({className=''}) => (
  <svg className={className} width="561" viewBox="0 0 561 470" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 469C1.80857 383.771 23.7962 248.971 194.931 209.092C252.41 198.263 265.739 199.096 356.54 194.931C442.343 188.266 518.482 165.941 559.801 0" stroke="#36D6AD" stroke-width="2"/>
    <path d="M528.645 -1C517.151 56.6077 441.342 172.142 230.059 173.416C128.578 176.274 12.3408 222.083 -0.0771639 376.409V433.845C-1.5599 413.209 -1.50039 394.096 -0.0771639 376.409V-1H528.645Z" fill="#36D6AD"/>
    <path d="M528.645 -1C517.151 56.6077 441.342 172.142 230.059 173.416C116.947 176.602 -14.497 233.148 -0.077164 433.845V-1H528.645Z" stroke="#36D6AD"/>
  </svg>


));

BackSplashFormTopImage.displayName = 'BackSplashFormTopImage';

export default BackSplashFormTopImage;
export { BackSplashFormTopImage };
