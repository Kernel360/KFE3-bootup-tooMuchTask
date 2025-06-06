import styled, { css } from "styled-components";

const ButtonSizeMap = {
  wide: {
    lg: "327px",
    md: "220px",
    sm: "82px",
  },
  icon: {
    xl: "80px",
    lg: "60px",
    md: "44px",
    sm: "30px",
  },
} as const;

const ButtonTheme = {
  primary: {
    background: "#00B29D",
    color: "#ffffff",
    border: "none",
  },
  secondary: {
    background: "#EEFDF9",
    color: "#00B29D",
    border: "1px solid #00B29D",
  },
  danger: {
    background: "#FF5A74",
    color: "#ffffff",
    border: "none",
  },
  default: {
    background: "#F4F4F4",
    color: "#656565",
    border: "1px solid #D2D2D2",
  },
  disabled: {
    background: "#D2D2D2",
    color: "#1f1f1f",
    border: "none",
  },
} as const;

type ButtonVariant = keyof typeof ButtonSizeMap;
type ButtonColorKey = keyof typeof ButtonTheme;

interface StyleProps {
  variant: ButtonVariant;
  size: string;
  color: ButtonColorKey;
  disabled?: boolean;
}

function getSizeStyle(
  size: string,
  variant: ButtonVariant
): { width: string; height: string } {
  const sizeMap = ButtonSizeMap[variant] as Record<string, string>;
  const width = sizeMap[size];
  const height = variant === "wide" ? (size === "sm" ? "46px" : "60px") : width;

  return { width, height };
}

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 4px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 99px;

  ${({ size, color, variant, disabled }: StyleProps) => {
    const { width, height } = getSizeStyle(size, variant);
    const theme = ButtonTheme[disabled ? "disabled" : color];

    return css`
      width: ${width};
      height: ${height};
      background-color: ${theme.background};
      color: ${theme.color};
      border: ${theme.border};
    `;
  }}
`;
