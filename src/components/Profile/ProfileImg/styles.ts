import styled, { css } from "styled-components";
import { ImgSizeKey, Variant } from "./type";

const Size = {
  xs: "24px",
  sm: "32px",
  md: "44px",
  lg: "56px",
  xl: "76px",
  xxl: "90px",
} as const;

interface ImgProps {
  size: ImgSizeKey;
  variant: Variant;
  imgUrl: string;
}

export const ProfileImgStyle = styled.div.attrs<ImgProps>(({ size, variant, imgUrl }) => {
  const width = Size[size];
  const radius = variant === "circle" ? "50%" : "10px";

  return {
    style: {
      width,
      height: width,
      borderRadius: radius,
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  };
})<ImgProps>``;
