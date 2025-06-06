import { ReactNode } from 'react';
import { Wrapper, AccordionButton, ListWrapper } from './style';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Accordion = ({ children, buttonTitle }: { children: ReactNode; buttonTitle: string }) => {
  return (
    <Wrapper>
      <AccordionButton>
        {buttonTitle}
        <i>
          <KeyboardArrowDownIcon />
        </i>
      </AccordionButton>
      <ListWrapper>{children}</ListWrapper>
    </Wrapper>
  );
};
