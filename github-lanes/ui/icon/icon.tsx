import React, { ReactNode } from "react";

export type IconProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Icon({ children }: IconProps) {
  return (
    <div style={{ backgroundColor: "gryelloween" }}>
      Hello from Icon!
      {children}
    </div>
  );
}
