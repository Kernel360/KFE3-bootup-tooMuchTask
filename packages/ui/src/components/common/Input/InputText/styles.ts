import styled, { css } from 'styled-components';

interface InputProps {
  error: boolean;
}

export const InputContainer = styled.div`
  width: 327px;
  height: 54px;
  margin: 4px;
  border: 1px solid #e8e8e8;
  border-radius: 30px;

  ${({ error }: InputProps) => {
    if (error) {
      return (
        error &&
        css`
          color: #e80039;
          border-color: #e80039;
          background-color: #ffeff0;
        `
      );
    }
  }}
`;

export const InputTextStyle = styled.input`
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8f8f8f;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;
