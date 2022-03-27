export type Position = "top" | "top-right" | "bottom";

export interface PositionProps {
  position?: Position;
  isMobile?: boolean;
}

export interface DropdownProps extends PositionProps {
  target: React.ReactElement;
  isMobile?: boolean;
  position?: Position;
}
