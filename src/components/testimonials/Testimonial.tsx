interface TestimonialProps {
  t: {
    name: string;
    login: string;
    text: string;
    img: any;
  };
}
const Testimonial: React.FC<TestimonialProps> = ({ t }) => {
  return (
    <figure className="rounded-2xl bg-white shadow-lg p-6 ring-1 ring-gray-900/5">
      <blockquote className="text-gray-900">
        <p>{t.text}</p>
      </blockquote>
      <div className="mt-6 flex items-center gap-x-4">
        <img
          className="h-10 w-10 flex-none rounded-full bg-slate-400"
          src={t.img}
          alt=""
        />
        <div className="flex-auto">
          <div className="font-semibold">{t.name}</div>
          <div className="text-gray-600">{t.login}</div>
        </div>
      </div>
    </figure>
  );
};

export default Testimonial;
