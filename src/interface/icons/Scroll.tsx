import React from 'react';

type Props = Omit<React.ComponentPropsWithoutRef<'svg'>, 'xmlns' | 'viewBox' | 'className'>;

// https://thenounproject.com/search/?q=scroll&i=1219367
// Created by jngll from the Noun Project
const Icon = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="icon" {...props}>
    <path d="M80.64,11.87l-.52,0-.26,0H30.64A10.24,10.24,0,0,0,20.42,21.94s0,.05,0,.08V67.66H18.77a2,2,0,0,0-.44.05,10.23,10.23,0,0,0,0,20.36,2,2,0,0,0,.44.05h45.4A10.25,10.25,0,0,0,74.41,77.9V32.34h6.23a10.23,10.23,0,0,0,0-20.47Zm-67.52,66a6.24,6.24,0,0,1,6.23-6.23H56.08a10.16,10.16,0,0,0,0,12.47H19.36A6.24,6.24,0,0,1,13.12,77.9Zm57.28,0a6.23,6.23,0,1,1-6.23-6.23,2,2,0,0,0,0-4H24.41V22.1a6.24,6.24,0,0,1,6.23-6.23h41.9a10.17,10.17,0,0,0-2.13,6.07s0,.05,0,.08ZM80.64,28.34H74.41V22.1a6.23,6.23,0,1,1,6.23,6.23Z" />
    <rect x="30.33" y="53.67" width="6" height="4" />
    <rect x="43.33" y="53.67" width="20" height="4" />
    <rect x="30.33" y="41.67" width="6" height="4" />
    <rect x="43.33" y="41.67" width="20" height="4" />
    <rect x="30.33" y="29.67" width="6" height="4" />
    <rect x="43.33" y="29.67" width="20" height="4" />
  </svg>
);

export default Icon;
