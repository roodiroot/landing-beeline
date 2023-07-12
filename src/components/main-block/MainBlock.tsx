import Button from "../ui/button";
import SubTitle from "../ui/sub-title";

const MainBlock = () => {
  return (
     <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <SubTitle label="Безопасный интернет для ребенка." button="Узнать больше" />
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Безопасное развитие для вашего ребенка
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Приложение для кофортного пребывания в сети детей и спокойствия их родителей. Билайн думает про ваших детей.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="default" >Установить</Button>
              <Button variant='text'symbol="→" >Смотреть далее</Button>
            </div>
          </div>
        </div>
      </div>
  )
};

export default MainBlock;
    