import img from "../assets/images/3.jpg";

const ImageBlock = () => {
  return (
    <div className="mt-0 sm:mt-8 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl object-right"
        src={img}
        alt=""
      />
    </div>
  );
};

export default ImageBlock;
