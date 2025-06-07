import styled, { css } from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding: 16px 24px 24px;
`;

const NavItemWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$active",
})<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 56px;
  text-align: center;
  font-size: 12px;
  color: var(--color-neutral-400);
  text-decoration: none;

  svg {
    fill: var(--color-neutral-400);
    width: 20px;
    height: 20px;
  }

  ${({ $active }) =>
    $active &&
    css`
      color: var(--color-teal-500);

      svg {
        fill: var(--color-teal-500);
      }
    `}
`;

const NavIcon = styled.div``;

export { NavBar, NavIcon, NavItemWrapper };
