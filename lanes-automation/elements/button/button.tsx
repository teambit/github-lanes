import type { ReactNode } from 'react';
import { colors } from '@learnbit/lanes-automation.styles.colors';

export type ButtonProps = {
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <div>{children}</div>;
}
