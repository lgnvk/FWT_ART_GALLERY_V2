import * as React from 'react';
import { SVGProps } from 'react';

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={39}
    height={15}
    fill="none"
    viewBox="0 0 39 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 0v15h2.644V8.628H8.71V6.35H2.644V2.278h6.707L12.845 15h2.61l2.929-10.525h.114L21.42 15h2.609l3.494-12.722h4.342V15h2.623V2.278H39V0H25.305l-2.63 11.03h-.129L19.731 0h-2.588l-2.808 11.023H14.2L11.57 0H0Z"
      fill="#DEDEDE"
    />
  </svg>
);

export default SvgLogo;
