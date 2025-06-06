'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { Wrapper } from './style';
import { Accordion } from '../Accordion';
import Link from 'next/link';

export const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <Wrapper>
        <Accordion buttonTitle='버튼명'>
          <li>메뉴 1</li>
          <li>메뉴 2</li>
          <li>
            <Link href={'/'}>거래지역 수정</Link>
          </li>
        </Accordion>
      </Wrapper>
    </>
  );
};
