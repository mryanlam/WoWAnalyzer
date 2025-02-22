import React from 'react';

type Props = Omit<
  React.ComponentPropsWithoutRef<'svg'>,
  'xmlns' | 'version' | 'viewBox' | 'className'
>;

const icon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="16 16 32 32"
    className="icon"
    {...props}
  >
    <polygon points="37.832,31.246 33.542,31.246 33.542,26.987 30.681,26.987 30.681,31.246 26.427,31.246 26.427,34.11 30.681,34.11 30.681,38.369 33.542,38.369 33.542,34.11 37.832,34.11" />
    <path d="M32.111,15.676L15.129,32.678L32.111,49.68l16.983-17.002L32.111,15.676z M19.169,32.678l12.943-12.957l12.943,12.957 L32.111,45.636L19.169,32.678z" />
  </svg>
);
export default icon;
