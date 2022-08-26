import * as React from 'react';
import { SVGProps } from 'react';

const SvgBurger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 9a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM0 1a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Z"
      fill="#DEDEDE"
    />
  </svg>
);

export default SvgBurger;