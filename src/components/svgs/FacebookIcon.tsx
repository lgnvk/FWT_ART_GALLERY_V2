import * as React from 'react';
import { SVGProps } from 'react';

const SvgFacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 12.073C24 5.405 18.628 0 12.002 0 5.372.001 0 5.405 0 12.075 0 18.1 4.388 23.095 10.124 24v-8.436H7.079v-3.489h3.048V9.413c0-3.025 1.792-4.696 4.532-4.696 1.314 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.954.931-1.954 1.887v2.264h3.326l-.53 3.49h-2.798v8.435C19.612 23.093 24 18.099 24 12.073Z"
      fill="#575757"
    />
  </svg>
);

export default SvgFacebookIcon;
