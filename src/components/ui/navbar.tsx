import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./logo";
import MobilMenu from "./mobil-menu";
import { RefObject } from "react";

interface NavbarProps {
  navigation: any[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToElement = (element: RefObject<HTMLInputElement>) => {
    element?.current?.scrollIntoView({ block: "start" });
  };

  return (
    <header className="fixed bg-white/80 backdrop-blur-sm inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <span
              onClick={() => scrollToElement(item.ref)}
              key={item.name}
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:88005553535"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            8 (800) 555-35-35
          </a>
        </div>
      </nav>
      <MobilMenu
        isOpen={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        navList={navigation}
        scrollToElement={scrollToElement}
      />
    </header>
  );
};

export default Navbar;
