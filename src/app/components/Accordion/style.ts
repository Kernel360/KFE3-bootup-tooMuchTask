import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AccordionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  padding: 0 20px;
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

const ListWrapper = styled.div`
  display: none;
`;

export { Wrapper, AccordionButton, ListWrapper };
