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

export const ProfileImgStyle = styled.div`
  ${({ size, variant, imgUrl }: ImgProps) => {
    const width = Size[size as keyof typeof Size];
    const radius = variant === "circle" ? "50%" : "10px";

    return css`
      width: ${width};
      height: ${width};
      border-radius: ${radius};
      background-image: url(${imgUrl});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `;
  }}
`;
