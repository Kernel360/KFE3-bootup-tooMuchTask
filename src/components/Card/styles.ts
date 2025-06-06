import styled, { css } from "styled-components";

interface CardStyleProps {
  isVertical: boolean;
  size: string;
}

export const CardStyle = styled.div`
  display: flex;
  align-items: center;

  ${({ isVertical }: CardStyleProps) => {
    const width = isVertical ? "120px" : "312px";
    const height = isVertical ? "220px" : "100px";
    const direction = isVertical ? "column" : "row";

    return css`
      flex-direction: ${direction};
      width: ${width};
      height: ${height};
    `;
  }}
`;

export const Thumbnail = styled.div`
  ${({ isVertical }: CardStyleProps) => {
    const sizePx = isVertical ? "120px" : "100px";
    return css`
      width: ${sizePx};
      height: ${sizePx};
    `;
  }}
`;

export const Title = styled.p`
  font-weight: medium;
  font-size: 16px;
  color: #444444;
`;

export const Location = styled.p`
  font-weight: medium;
  font-size: 12px;
  color: #8f8f8f;
`;

export const Time = styled.p`
  font-weight: regular;
  font-size: 12px;
  color: #8f8f8f;
`;

export const Price = styled.p`
  font-weight: medium;
  font-size: 14px;
  font-color: #444444;
`;
