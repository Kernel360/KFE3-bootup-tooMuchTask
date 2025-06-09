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
