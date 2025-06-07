import styled, { css } from "styled-components";

// Props 타입 정의 추가
interface CardStyleProps {
  isVertical: boolean;
  size?: string;
}

interface ThumbnailProps {
  size?: string;
}

export const CardStyle = styled.div<CardStyleProps>`
  display: flex;
  align-items: center;

  ${({ isVertical }) => {
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

export const Thumbnail = styled.div<ThumbnailProps>`
  position: relative;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;

  ${({ size }) => {
    const thumbnailSize = "100px"; // 기본 크기, 필요에 따라 size prop으로 조정 가능

    return css`
      width: ${thumbnailSize};
      height: ${thumbnailSize};
      min-width: ${thumbnailSize};
      min-height: ${thumbnailSize};
    `;
  }}
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 4px 0;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

export const Time = styled.span`
  font-size: 12px;
  color: #666;
  white-space: nowrap;
`;

export const Location = styled.span`
  font-size: 12px;
  color: #666;
  white-space: nowrap;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-left: 8px;
`;
