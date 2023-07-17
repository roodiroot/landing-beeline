import { useRef } from "react";
import ImageBlock from "./components/ImageBlock";
import About from "./components/about/About";
import Advantages from "./components/advantages/Advantages";
import FeedBackBlock from "./components/feedback/FeedbackBlock";
import MainBlock from "./components/main-block/MainBlock";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

export interface Navigation {
  name: string;
  href?: string;
  ref?: any;
}

const App = () => {
  const about = useRef<HTMLInputElement>(null);
  const advantage = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const testimonials = useRef<HTMLInputElement>(null);

  const navigation: Navigation[] = [
    { name: "Наша миссия", ref: about },
    { name: "Преимущества", ref: advantage },
    { name: "Тарифы", ref: price },
    { name: "Отзывы", ref: testimonials },
  ];

  return (
    <div className="bg-white">
      <Navbar navigation={navigation} />
      <MainBlock />
      <About element={about} />
      <ImageBlock />
      <Advantages element={advantage} />
      <Pricing element={price} />
      <Testimonials element={testimonials} />
      <FeedBackBlock />
      <Footer />
    </div>
  );
};

export default App;
