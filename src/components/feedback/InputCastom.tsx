import React, { ReactElement } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import InputMask from "react-input-mask";

interface InputProps {
  id: string;
  type: string;
  className?: string;
  register: UseFormRegister<FieldValues>;
  placeholder: string;
  required?: boolean;
}

const InputCastom: React.FC<InputProps> = ({
  id,
  type,
  className = "",
  required,
  register,
  placeholder,
}) => {
  if (type === "textarea") {
    return (
      <textarea
        id={id}
        {...register(id, { required })}
        rows={4}
        className={className}
        placeholder={placeholder}
      />
    );
  } else if (type === "number") {
    return (
      <InputMask
        id={id}
        mask="+7 (999) 999-99-99"
        maskChar={null}
        {...register(id, { required })}
        placeholder={placeholder}
        className={className}
      />
    );
  } else {
    return (
      <input
        type={type}
        id={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className={className}
      />
    );
  }
};

export default InputCastom;
