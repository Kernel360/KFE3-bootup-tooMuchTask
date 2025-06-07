import styled, { css } from "styled-components";

const ColorMap = {
  teal: "#00CFB6",
  rose: "#FF5A74",
  neutral: "#8F8F8F",
};

export type ChipColorKey = keyof typeof ColorMap;

interface ChipStyleProps {
  color: ChipColorKey;
}

export const ChipStyle = styled.div`
  color: white;
  font-size: 8px;
  font-weight: bold;

  ${({ color }) => {
    return css`
      background-color: ${ColorMap[color]};
    `;
  }}
`;
