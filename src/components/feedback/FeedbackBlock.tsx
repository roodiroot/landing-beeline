import FeedbackForm from "./FeedbackForm";

const FeedBackBlock = () => {
  return (
    <div className="mt-0 sm:mt-8 xl:mx-auto xl:max-w-7xl xl:px-8 py-20 ">
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-24 xl:rounded-3xl shadow-2xl sm:px-24 lg:px-32">
        <h2 className="text-gray-900 mx-auto max-w-2xl text-center text-3xl sm:text-4xl font-bold tracking-tight">
          Узнайте больше о нас.
        </h2>
        <p className="mt-2 mx-auto text-center max-w-xl text-lg leading-8 text-gray-900">
          Заполните форму обратной связи прямо сейчас, чтобы заказать бесплатную
          консультацию.
        </p>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FeedBackBlock;
