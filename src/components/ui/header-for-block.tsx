interface HeaderForBlockProps {
  h2?: string;
  title: string;
  description?: string;
  x2?: boolean;
}

const HeaderForBlock: React.FC<HeaderForBlockProps> = ({
  h2,
  title,
  description,
  x2,
}) => {
  return (
    <div className="mx-auto max-w-2xl lg:text-center">
      {h2 && <h2 className="text-base font-semibold leading-7 text-yellow-400">
        {h2}
      </h2>}
      <p
        className={`
      mt-2  font-bold tracking-tight text-gray-900 
      ${x2 ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}
      `}
      >
        {title}
      </p>
      {
        description && <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      }
    </div>
  );
};

export default HeaderForBlock;
