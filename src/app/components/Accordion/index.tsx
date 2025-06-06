import { ReactNode, useRef, useState } from 'react';
import { Wrapper, AccordionButton, AccordionListWrapper } from './style';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Accordion = ({ children, buttonTitle }: { children: ReactNode; buttonTitle: string }) => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setActive((prev) => !prev);
    console.log(active);
  };

  return (
    <Wrapper active={active}>
      <AccordionButton ref={ref} onClick={handleToggle}>
        {buttonTitle}
        <i>
          <KeyboardArrowDownIcon />
        </i>
      </AccordionButton>
      <AccordionListWrapper>{children}</AccordionListWrapper>
    </Wrapper>
  );
};
