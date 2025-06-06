import styled from 'styled-components';

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'headerType',
})<{ headerType: string | null }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;

  ${({ headerType }) =>
    headerType === 'profile' &&
    `
      justify-content: flex-start;
      gap: 8px;

      p{
      font-size: 24px;
      line-height: 24px;
      font-weight: 700;
      }
    `}
`;

const IconButton = styled.button`
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

const Title = styled.p`
  line-height: 20px;
  font-weight: 500;
`;

const RightArea = styled.div`
  width: 44px;
  height: 44px;
`;

export { Wrapper, IconButton, RightArea, Title };
