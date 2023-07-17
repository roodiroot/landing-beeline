import { RefObject } from "react";

interface ContainerProps {
  children: React.ReactNode;
  element?: RefObject<HTMLInputElement>;
}
const Container: React.FC<ContainerProps> = ({ children, element }) => {
  return (
    <div ref={element} className="relative py-24 sm:pt-48 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default Container;
