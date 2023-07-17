import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import Button from "../ui/button";
import InputCastom from "./InputCastom";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const title = "Обратная связь";
    const detailsToSend = {
      Телефон: data.phoneNumber,
    };
    console.log(detailsToSend);
  };

  return (
    <form className="max-w-md mt-10 mx-auto flex gap-4">
      <label htmlFor="emailAdres" className="sr-only">
        Email address
      </label>
      <InputCastom
        id="phoneNumber"
        type="number"
        className={`
            min-w-0 flex-auto rounded-md border-0 bg-white/60 px-3.5 py-2 
            text-gray-900 ring-1 ring-inset sm:text-sm sm:leading-6 
            placeholder:font-light placeholder:text-gray-600
            ${errors["phoneNumber"] ? "ring-rose-500" : "ring-gray-900/60"}
        `}
        placeholder="Введите ваш номер телефона"
        register={register}
        required
      />
      <Button
        // onClick={handleSubmit(onSubmit)}
        variant="black"
      >
        Отправить
      </Button>
    </form>
  );
};

export default FeedbackForm;
