"use client";

import { InputTextStyle, InputContainer, ErrorMessage } from "./styles";
import { InputHTMLAttributes, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLElement> {
  error: boolean;
  icon: SVGAElement;
}

const InputText = ({
  error,
  icon,
  type,
  placeholder,
  name,
  onChange,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isPassword = type === "password";
  const currentType = isPassword && isVisible ? "text" : type;
  const buttonIcon = isVisible ? "가려" : "보여"; // icon library
  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };
  const errorMessage = ""; // 기능 연결 시 맞추어 제작

  return (
    <div className="flex flex-col">
      <InputContainer
        error={error}
        className="flex justify-between items-center p-4"
      >
        <div className="flex gap-2">
          <div>{icon}</div>
          <InputTextStyle
            error={error}
            id={name}
            name={name}
            type={currentType}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
        {isPassword && <button onClick={handleClick}>{buttonIcon}</button>}
      </InputContainer>
      {error && <ErrorMessage className="pl-5">{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default InputText;
