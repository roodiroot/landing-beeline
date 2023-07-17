import { RefObject } from "react";
import Container from "../Container";

interface AboutProps {
  element?: RefObject<HTMLInputElement>;
}

const About: React.FC<AboutProps> = ({ element }) => {
  return (
    <Container element={element}>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Наша миссия
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-lg leading-8 text-gray-600">
              Заключается в&nbsp;создании безопасной и&nbsp;здоровой сетевой
              среды для детей. Мы&nbsp;стремимся разработать и&nbsp;предоставить
              инновационное прило-жение, которое эффективно ограничивает доступ
              детей к&nbsp;контенту, не&nbsp;предназначенному для
              их&nbsp;возрастной группы.
            </p>
            <div className="mt-10 max-w-xl leading-7 text-gray-700">
              <p>
                Наша цель&nbsp;&mdash; помочь родителям защитить своих детей
                от&nbsp;нежелательного и&nbsp;неподходящего контента,
                обеспечивая им&nbsp;возможность безопасно исследовать цифровой
                мир и&nbsp;развиваться в&nbsp;интернете.
              </p>
              <div className="mt-10">
                Мы&nbsp;стремимся к&nbsp;постоянному совершенствованию
                и&nbsp;инновациям, чтобы наше прило-жение было надежным
                инструментом, который родители могут использовать для
                обеспечения безопасности и&nbsp;благополучия своих детей
                в&nbsp;онлайн-среде.
              </div>
            </div>
          </div>
          <div className="xl:flex xl:flex-auto justify-center">
            <dl className="w-64 xl:w-80 space-y-8">
              <div className="flex flex-col-reverse gap-x-4">
                <dt className="leading-7 text-gray-600">
                  Отмечают улучшение безопасности.
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                  95 %
                </dd>
              </div>
              <div className="flex flex-col-reverse gap-x-4">
                <dt className="leading-7 text-gray-600">
                  Заблокировано с нежелательным контентом.
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                  10 000 сайтов
                </dd>
              </div>
              <div className="flex flex-col-reverse gap-x-4">
                <dt className="leading-7 text-gray-600">
                  Среднее время настройки приложения.
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                  5 минут
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
