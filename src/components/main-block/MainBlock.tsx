import Button from "../ui/button";
import SubTitle from "../ui/sub-title";
import main from "../../assets/images/2(2).png";
import FoneSvg from "../ui/foneSvg";

const MainBlock = () => {
  return (
    <div className="relative isolate pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <SubTitle label="Безопасный интернет везде." button="Узнать больше" />
          <div className="text-start">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Безопасное развитие для вашего ребенка
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Защитите своего ребенка в сети: приложение для безопасного
              сетевого серфинга.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <Button variant="default">Установить</Button>
              <Button variant="text" symbol="→">
                Смотреть далее
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <FoneSvg
            classNames="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            img={main}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
