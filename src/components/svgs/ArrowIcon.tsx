import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12c0-.147.06-.289.167-.393a.58.58 0 0 1 .404-.162h13.477l-3.596-3.496a.548.548 0 0 1 0-.786.58.58 0 0 1 .809 0l4.571 4.444A.555.555 0 0 1 20 12a.542.542 0 0 1-.168.393l-4.571 4.444a.58.58 0 0 1-.81 0 .548.548 0 0 1 0-.787l3.597-3.495H4.571a.58.58 0 0 1-.404-.162A.548.548 0 0 1 4 12Z"
      fill="#575757"
    />
  </svg>
);

export default SvgArrowIcon;
