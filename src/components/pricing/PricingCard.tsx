import { CheckIcon } from "@heroicons/react/24/outline";

import Button from "../ui/button";

interface PricingCardProps {
  order: string;
  title: string;
  description: string;
  price: string;
  adv: string[];
}
const PricingCard: React.FC<PricingCardProps> = ({
  order,
  title,
  description,
  price,
  adv,
}) => {
  return (
    <div
      className={`
    ${order === "2" ? "lg:rounded-b-none z-10" : "lg:mt-8"}
    ${order === "1" && "lg:rounded-tr-none lg:rounded-br-none"}
    ${order === "3" && "lg:rounded-tl-none lg:rounded-bl-none"}
    flex flex-col justify-between rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 bg-white
    `}
    >
      <div>
        <div className="flex items-center justify-between gap-x-4">
          <h3 className="text-lg font-bold leading-8 text-gray-900">{title}</h3>
        </div>
        <p className="text-start text-sm leading-6 text-gray-600">
          {description}
        </p>
        <div className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight">₽{price}</span>
          <span className="text-sm font-semibold leading-6 text-gray-600">
            /месяц
          </span>
        </div>
        <ul className="mt-8 text-sm leading-6 text-gray-600 space-y-3">
          {adv.map((a) => (
            <li key={a} className="flex gap-x-3 justify-start">
              <CheckIcon className="w-5 h-6 flex-none text-yellow-400" />
              {a}
            </li>
          ))}
        </ul>
      </div>
      <Button className="mt-8" variant={order === "2" ? "default" : "outline"}>
        Купить
      </Button>
    </div>
  );
};

export default PricingCard;
