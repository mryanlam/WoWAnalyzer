import React from 'react';

type Props = Omit<
  React.ComponentPropsWithoutRef<'svg'>,
  'xmlns' | 'version' | 'viewBox' | 'className'
>;

const icon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="16 17 32 32"
    className="icon"
    {...props}
  >
    <path d="M28.832,44.802h6.559v-1.101h-6.559V44.802z M29.91,47.004h4.402v-1.101H29.91V47.004z M32.156,18.379c-0.012,0-0.031,0-0.045,0c-0.014,0-0.033,0-0.045,0c-1.078,0-9.704,0.127-9.704,11.01 c0,2.696,1.5,4.496,2.949,6.234c1.255,1.507,2.442,2.928,2.442,4.776V42.6h8.715v-2.202c0-1.848,1.187-3.269,2.442-4.776 c1.449-1.737,2.949-3.537,2.949-6.234C41.86,18.506,33.235,18.379,32.156,18.379z" />
  </svg>
);
export default icon;
