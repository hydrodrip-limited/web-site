import { FC, forwardRef } from "react";
import { ButtonProps } from "./Button.props";
import baseButton from "./Button.style";

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      disabled = false,
      size = "md",
      outline,
      className,
      to,
      variant = "primary",
      ...props
    },
    forwardedRef
  ) => {
    const Component = to ? "a" : "button";

    return (
      <Component
        ref={forwardedRef}
        href={to}
        className={baseButton({
          size,
          disabled,
          outline,
          variant,
          className,
        })}
        {...props}
        disabled={disabled}
      >
        {children}
      </Component>
    );
  }
);
