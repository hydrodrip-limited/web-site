import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  disabled?: boolean;
  outline?: boolean;
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  to?: string;
}
