'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { IconButton, RightArea, Wrapper, Title } from './style';
import { Accordion } from '../Accordion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface location {
  name: string;
}

export const Header = () => {
  const [headerType, setHeaderType] = useState<string | null>();
  const [name, setName] = useState<string>('상대방 닉네임');
  const [locations, setLocations] = useState<location[]>([]);
  const pathname = usePathname();
  const router = useRouter();

  const handleBack = () => router.back();
  const getHeaderType = (pathname: string): string | null => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/product')) return 'detail';
    if (pathname.startsWith('/chat')) return 'chat';
    if (pathname.startsWith('/profile')) return 'profile';
    return null;
  };

  useEffect(() => {
    setHeaderType(getHeaderType(pathname));
  }, [pathname]);

  return (
    <>
      <Wrapper headerType={headerType!}>
        {headerType !== 'home' && (
          <IconButton aria-label='뒤로 가기' onClick={handleBack}>
            <ArrowBackIosNewIcon />
          </IconButton>
        )}

        {headerType === 'home' && (
          <>
            <Accordion buttonTitle='버튼명'>
              {locations?.map(({ name }, idx) => {
                return <li key={idx}>{name}</li>;
              })}
              <li>
                <Link href={'/'}>거래지역 수정</Link>
              </li>
            </Accordion>

            {/* onClickEvent추가 */}
            <IconButton aria-label='알람 보기'>
              <NotificationsIcon />
            </IconButton>
          </>
        )}

        {headerType === 'detail' && (
          // onClickEvent추가
          <IconButton aria-label='더보기'>
            <MoreVertIcon />
          </IconButton>
        )}

        {headerType === 'chat' && (
          <>
            <Title>{name}</Title>
            {/* onClickEvent추가 */}
            <IconButton aria-label='더보기'>
              <MoreVertIcon />
            </IconButton>
          </>
        )}

        {headerType === 'profile' && (
          <>
            <Title>설정 페이지명</Title>
            <RightArea />
          </>
        )}
      </Wrapper>
    </>
  );
};
