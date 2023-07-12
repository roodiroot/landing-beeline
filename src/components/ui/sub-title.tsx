interface SubTitleProps {
    label: string;
    button: string;
}
const SubTitle: React.FC<SubTitleProps> = ({label, button}) => {
  return (
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {label}{' '}
              <a href="#" className="font-semibold text-yellow-500">
                <span className="absolute inset-0" aria-hidden="true" />
                {button} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
        </div>
  )
};

export default SubTitle;
