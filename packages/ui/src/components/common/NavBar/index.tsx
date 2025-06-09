'use client';

import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavBar, NavIcon, NavItemWrapper } from './styles';

const navItems = [
  { href: '/', label: '홈', icon: <HomeFilledIcon /> },
  { href: '/deal', label: '거래', icon: <LocalOfferIcon /> },
  { href: '/search', label: '검색', icon: <SearchIcon /> },
  { href: '/profile', label: '프로필', icon: <PersonIcon /> },
];

export default function Home() {
  const pathname = usePathname();

  return (
    <NavBar>
      {navItems.map(({ href, label, icon }) => (
        <Link key={href} href={href} passHref>
          <NavItemWrapper $active={pathname === href}>
            <NavIcon>{icon}</NavIcon>
            <p>{label}</p>
          </NavItemWrapper>
        </Link>
      ))}
    </NavBar>
  );
}
