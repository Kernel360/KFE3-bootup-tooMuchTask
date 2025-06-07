'use client';

import { ReactNode, useRef, useState } from 'react';
import { Wrapper, AccordionButton, AccordionListWrapper } from './style';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

// Accordion 컴포넌트: 접고 펼칠 수 있는 UI를 구현
export const Accordion = ({ children, buttonTitle }: { children: ReactNode; buttonTitle: string }) => {
  // 펼침 여부 상태 관리 (true: 열림, false: 닫힘)
  const [active, setActive] = useState<boolean>(false);
  // 버튼 요소 참조 (향후 포커싱이나 DOM 조작 시 사용 가능)
  const ref = useRef<HTMLButtonElement>(null);

  // 버튼 클릭 시 상태를 반전시켜 Accordion을 열거나 닫음
  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <Wrapper active={active}>
      <AccordionButton ref={ref} onClick={handleToggle}>
        {buttonTitle}
        <i>
          <KeyboardArrowDownIcon />
        </i>
      </AccordionButton>
      <AccordionListWrapper>
        {children}
        <li>
          <Link href={'/'}>거래지역관리</Link>
        </li>
      </AccordionListWrapper>
    </Wrapper>
  );
};
