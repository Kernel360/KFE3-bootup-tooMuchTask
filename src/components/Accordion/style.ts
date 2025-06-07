import styled from "styled-components";

const Wrapper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== "active",
})<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  position: relative;
  ${({ active }) =>
    active &&
    `
      ul {
      opacity: 1;
      visibility: visible;
      }
    `}
`;

const AccordionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  padding: 0 14px 0 20px;
  cursor: pointer;
  border: 1px solid var(--color-neutral-900);
  border-radius: 40px;

  i {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const AccordionListWrapper = styled.ul`
  visibility: hidden;
  opacity: 0;
  min-width: 120px;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 14px;
  border-radius: 5px;
  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  transition: ease-in-out 0.15s all;

  &,
  li {
    list-style: none;
  }

  li {
    font-size: 14px;
    font-weight: 500;
    padding: 0 4px;
    box-sizing: border-box;
    list-style: none;
  }

  li + li {
    border-top: 1px solid #d2d1d2;
    padding-top: 12px;
    margin-top: 11px;
  }
`;

export { Wrapper, AccordionButton, AccordionListWrapper };
