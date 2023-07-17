interface ButtonProps {
  children: React.ReactNode;
  variant: string;
  symbol?: string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  symbol,
  className,
}) => {
  return (
    <a
      href="#"
      className={`
        text-sm font-semibold transition
        ${variant === "text" && "leading-6 text-gray-900"}
        ${
          variant === "black" &&
          "rounded-md bg-gray-900 px-3.5 py-2.5 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-white"
        }
        ${
          variant === "default" &&
          "rounded-md bg-yellow-300 px-3.5 py-2.5 text-white shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
        }
        ${
          variant === "outline" &&
          "rounded-md bg-inherit px-3.5 py-2.5 text-yellow-300 ring-1 ring-yellow-200 hover:ring-yellow-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
        }
        ${className && className}
        `}
    >
      {children} {symbol && <span aria-hidden="true">{symbol}</span>}
    </a>
  );
};

export default Button;
