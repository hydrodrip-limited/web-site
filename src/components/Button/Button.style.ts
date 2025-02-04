import { tv } from "tailwind-variants";

const baseButton = tv({
  base: [
    "flex items-center justify-center gap-3",
    "font-medium leading-6",
    "focus:ring-2 focus:ring-offset-2 focus:outline-none",
    "border border-transparent",
    'py-3 px-4 rounded-lg',
      "transition ease-in-out delay-150 duration-300 hover:-translate-y-1"
  ],
  variants: {
    size: {
      xs: "text-sm h-7 px-2",
      sm: "text-sm h-8 px-3",
      md: "text-base h-9 px-4",
      lg: "text-base h-10 px-5",
      xl: "text-lg h-12 px-6",
    },
    disabled: {
      true: "text-zinc-500 bg-zinc-400 pointer-events-none",
    },
    outline: {
      true: "bg-transparent outline outline-1",
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
});

const button = tv({
  extend: baseButton,
  base: "text-white",
  variants: {
    variant: {
      primary: "bg-primary-500 hover:bg-primary-700",
      secondary: "bg-secondary-900 hover:bg-secondary-700",
    },
    outline: {
      true: "bg-transparent hover:text-white",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      outline: true,
      disabled: false,
      className: "outline-primary-600 outline outline-1 text-primary-500",
    },
    {
      variant: "secondary",
      outline: true,
      disabled: false,
      className: "outline-secondary-900 outline outline-1 text-secondary-900",
    },
  ],
});

export default button;
