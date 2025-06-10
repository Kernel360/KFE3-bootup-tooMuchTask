import styled, { css } from 'styled-components';

export const CHIP_STATUS = {
  reserved: { title: '예약중', color: 'rose' },
  completed: { title: '거래완료', color: 'neutral' },
  onSale: { title: '판매중', color: 'teal' },
} as const;

export const CHIP_PRICE = {
  currentOffer: { title: '현재제시가', color: 'neutral' },
  buyNowPrice: { title: '즉시거래가', color: 'teal' },
} as const;

const ColorMap = {
  teal: '#00CFB6',
  rose: '#FF5A74',
  neutral: '#8F8F8F',
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


/**
 * ✅ Chip 컴포넌트
 *
 * 💬 역할:
 * - 텍스트와 색상을 받아서 칩 형태의 UI를 보여줌
 *
 * 🔧 Props:
 * @param title - 칩 안에 들어갈 텍스트 (예: '경매중')
 * @param color - 칩의 배경색 ('teal' | 'rose' | 'neutral')
 *
 * 📌 사용 예시:
 * <Chip title="즉시구매가" color="teal" />
 */
import { ChipColorKey, ChipStyle } from './styles';

export interface Props {
  title: string;
  color: ChipColorKey;
}

export const Chip = ({ title, color }: Props) => {
  return (
    <ChipStyle
      color={color}
      className='px-2 py-0.5 rounded-[20px] backdrop-blur-md inline-flex justify-center items-center gap-2.5 '
    >
      {title}
    </ChipStyle>
  );
};

export default Chip;
