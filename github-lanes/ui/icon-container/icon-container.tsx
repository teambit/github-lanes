import React, { ReactNode } from "react";
import { Icon } from "@teambit/github-lanes.ui.icon";

export type IconContainerProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function IconContainer({ children }: IconContainerProps) {
  return <div><Icon children={children}/></div>;
}
