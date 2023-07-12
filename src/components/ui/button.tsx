interface ButtonProps {
    children: React.ReactNode,
    variant: string, 
    symbol?: string
}
const Button: React.FC<ButtonProps> = ({children, variant, symbol}) => {
  return (
        <a
        href="#"
        className={`
        text-sm font-semibold
        ${variant === 'text' && "leading-6 text-gray-900"}
        ${variant === 'default' && "rounded-md bg-yellow-300 px-3.5 py-2.5 text-white shadow-sm hover:bg-yellow-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"}
        `}
        >
            {children}{' '}
            {symbol && 
            <span aria-hidden="true">{symbol}</span>
            }
        </a>
  )
};

export default Button;
