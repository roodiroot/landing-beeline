import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import FeatureElement from "./FeatureElement";
import HeaderForBlock from "../ui/header-for-block";
import Container from "../Container";
import { RefObject } from "react";

interface AdvantagesProps {
  element: RefObject<HTMLInputElement>;
}

const features = [
  {
    name: "Безопасность",
    description:
      "Наше приложение обеспечивает безопасность детей в сети, блокируя нежелательный контент, а так же контент 18+.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Простота",
    description:
      "Гибкие настройки обеспечивают полный контроль для родителей: настраивайте приложение под потребности своих детей",
    icon: LockClosedIcon,
  },
  {
    name: "Неуязвимость",
    description:
      "Постоянные обновления для расширения базы данных с новыми сайтами, содержащими нежелательный контент.",
    icon: ArrowPathIcon,
  },
  {
    name: "Уверенность",
    description:
      "Дает родителям и близким уверенность в безопасности их детей при использовании мобильных устройств.",
    icon: FingerPrintIcon,
  },
];

const Advantages: React.FC<AdvantagesProps> = ({ element }) => {
  return (
    <Container element={element}>
      <HeaderForBlock
        h2="Достоинства"
        title="Какие преимущества вы&nbsp;получите?"
        description="Полный контроль, никаких нежелательных контентов, только безопасность и&nbsp;спокойствие для вас и&nbsp;ваших детей."
      />
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <FeatureElement
              key={feature.name}
              name={feature.name}
              Icon={feature.icon}
              description={feature.description}
            />
          ))}
        </dl>
      </div>
    </Container>
  );
};

export default Advantages;
