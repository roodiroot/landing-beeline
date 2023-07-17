import HeaderForBlock from "../ui/header-for-block";
import PricingCard from "./PricingCard";
import Container from "../Container";
import { RefObject } from "react";

interface PricingProps {
  element?: RefObject<HTMLInputElement>;
}

const Pricing: React.FC<PricingProps> = ({ element }) => {
  return (
    <Container element={element}>
      <div className="mx-auto max-w-4xl text-center">
        <HeaderForBlock
          x2
          h2="Стоимость"
          title="Тарифные планы и цены"
          description="Отличие, и никто его не отпустил, и лейбористы тоже. Часто и как бы регулярно он хочет не получать от этого удовольствия. Я объясню это как труда."
        />
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <PricingCard
            order="1"
            title="Малютка"
            description="Для малышей от 0 до трех лет"
            price="250"
            adv={[
              "блокировка сайтов",
              "опасного контента 18+",
              "опасных приложений",
              "скачивание игр",
            ]}
          />
          <PricingCard
            order="2"
            title="Детский"
            description="Для деток от 3 до 12 лет "
            price="400"
            adv={[
              "отслеживание геолокации",
              "установки ограничения",
              "веб фильтры",
              "отчеты в личном кабинете",
            ]}
          />
          <PricingCard
            order="3"
            title="Универсальный"
            description="Универсальный тариф для всех"
            price="950"
            adv={[
              "уточнение локации",
              "отчеты в личном кабинете",
              "мониторинг активности",
              "веб фильтры",
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
