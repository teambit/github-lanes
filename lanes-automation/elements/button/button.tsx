import type { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
};

/* comment */
export function Button({ children }: ButtonProps) {
  return <div>{children}</div>;
}
