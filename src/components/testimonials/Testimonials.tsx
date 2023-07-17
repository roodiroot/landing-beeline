import Container from "../Container";
import HeaderForBlock from "../ui/header-for-block";
import Testimonial from "./Testimonial";
import l1 from "../../assets/images/l1.png";
import g1 from "../../assets/images/owervievs/g1.jpg";
import g2 from "../../assets/images/owervievs/g2.jpg";
import g3 from "../../assets/images/owervievs/g3.jpg";
import g4 from "../../assets/images/owervievs/g4.jpg";
import g5 from "../../assets/images/owervievs/g5.jpg";
import g6 from "../../assets/images/owervievs/g6.jpg";
import m1 from "../../assets/images/owervievs/m1.jpg";
import m2 from "../../assets/images/owervievs/m2.jpg";
import m3 from "../../assets/images/owervievs/m3.jpg";
import m4 from "../../assets/images/owervievs/m4.jpg";
import m5 from "../../assets/images/owervievs/m5.jpg";
import m6 from "../../assets/images/owervievs/m6.jpg";
import { RefObject } from "react";

interface TestimonialProps {
  element?: RefObject<HTMLInputElement>;
}

const Testimonials: React.FC<TestimonialProps> = ({ element }) => {
  const testemonials = [
    {
      name: "Александр Федоров",
      login: "@alex_fed",
      text: "““Pro дети” стало настоящим спасением для моей семьи! Теперь я уверен, что мой ребенок безопасен в интернете.”",
      img: m1,
    },

    {
      name: "Екатерина Смирнова",
      login: "@kate_smirn",
      text: "“Простое в использовании приложение, которое дает мне контроль над тем, что мой ребенок делает в сети.”",
      img: g1,
    },
    {
      name: "Максим Иванов",
      login: "@max_ivan",
      text: "“Очень полезное приложение! Теперь я могу спокойно работать, зная, что мой ребенок находится в безопасности.”",
      img: m2,
    },

    {
      name: "Анна Кузнецова",
      login: "@anna_kuz",
      text: "“Супер! Это приложение блокирует нежелательный контент и фильтрует опасные сайты.”",
      img: g2,
    },

    {
      name: "Дмитрий Петров",
      login: "@dima_petr",
      text: "“Наконец-то нашла приложение, которое действительно работает и защищает моего ребенка в сети.”",
      img: m3,
    },
    {
      name: "Виктория Соколова",
      login: "@vicky_sok",
      text: "“Очень полезное и надежное приложение “Pro дети”. Рекомендую всем родителям!”",
      img: g3,
    },
    {
      name: "Артем Морозов",
      login: "@art_moroz",
      text: "“Мне нравится, как приложение помогает установить правила и ограничения для моего ребенка в интернете.”",
      img: m4,
    },
    {
      name: "Наталья Волкова",
      login: "@nat_volk",
      text: "“Теперь я могу быть уверена, что мой ребенок не сталкивается с опасным контентом.”",
      img: g4,
    },

    {
      name: "Иван Лебедев",
      login: "@ivan_leb",
      text: "“Просто великолепно! “Pro дети” дает мне мир и спокойствие, зная, что мой ребенок безопасен в онлайне.”",
      img: m5,
    },
    {
      name: "Ольга Николаева",
      login: "@olga_nik",
      text: "“Отличное приложение для родителей, которые хотят обеспечить безопасность своих детей в сети.”",
      img: g5,
    },
    {
      name: "Сергей Козлов",
      login: "@sergey_koz",
      text: "“Мне нравится, что это приложение предоставляет мне отчеты о деятельности моего ребенка в интернете.”",
      img: m6,
    },

    {
      name: "Алиса Белова",
      login: "@alice_bel",
      text: "“Супер простое в использовании приложение, которое дает мне контроль над тем, что мой ребенок видит в сети.”",
      img: g6,
    },
  ];
  return (
    <Container element={element}>
      <HeaderForBlock
        // h2="Отзывы"
        title="Что уже о нас пишут родители"
        description="Мы&nbsp;делаем все возможное, чтобы удовлетворить каждого клиента,
  обеспечивая индивидуальный подход и&nbsp;высокое качество услуг."
      />
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-600 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg ring-1 ring-gray-900/5 xl:col-start-2 xl:row-end-1">
          <blockquote className="p-12 text-lg font-semibold leading-8 tracking-tight text-gray-900">
            <p>
              “Вы&nbsp;сделали важный шаг к&nbsp;более безопасному миру вашего ребенка. С&nbsp;помощью нашего приложения ребенок сможет безопасно развиваться в&nbsp;Сети, а&nbsp;родители контролировать это не&nbsp;нарушая личное пространство.”
            </p>
          </blockquote>
          <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
            <img
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
              alt=""
              className="h-10 w-10 flex-none rounded-full bg-slate-400"
            />
            <div className="flex-auto">
              <div className="font-semibold">Борисов Максим</div>
              <div className="text-gray-600">@mvoodi</div>
            </div>
            <img className="h-10 w-auto flex-none" src={l1} alt="" />
          </figcaption>
        </figure>
        <div className="xl:contents space-y-8 xl:space-y-0">
          <div className="xl:row-span-2 space-y-8">
            {testemonials
              .slice(0, 3)
              .map(
                (t: {
                  name: string;
                  login: string;
                  text: string;
                  img: any;
                }) => (
                  <Testimonial key={t.login} t={t} />
                )
              )}
          </div>
          <div className="xl:row-start-1 space-y-8">
            {testemonials
              .slice(6, 9)
              .map(
                (t: {
                  name: string;
                  login: string;
                  text: string;
                  img: any;
                }) => (
                  <Testimonial key={t.login} t={t} />
                )
              )}
          </div>
        </div>
        <div className="xl:contents space-y-8 xl:space-y-0">
          <div className="xl:row-start-1 space-y-8">
            {testemonials
              .slice(3, 6)
              .map(
                (t: {
                  name: string;
                  login: string;
                  text: string;
                  img: any;
                }) => (
                  <Testimonial key={t.login} t={t} />
                )
              )}
          </div>
          <div className="xl:row-span-2 space-y-8">
            {testemonials
              .slice(9, 12)
              .map(
                (t: {
                  name: string;
                  login: string;
                  text: string;
                  img: any;
                }) => (
                  <Testimonial key={t.login} t={t} />
                )
              )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
