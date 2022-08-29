import * as React from 'react';
import { SVGProps } from 'react';

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.386 14.825a.546.546 0 0 0 0 .783c.22.224.552.224.773 0l6.73-6.713 6.842 6.937c.22.224.552.224.772 0a.546.546 0 0 0 0-.783l-6.84-6.937L15.833.95a.546.546 0 0 0 0-.783.528.528 0 0 0-.772 0L7.89 7.328.938.28a.528.528 0 0 0-.772 0 .546.546 0 0 0 0 .783l7.062 7.049-6.842 6.713Z"
      fill="#575757"
    />
  </svg>
);

export default SvgCross;
