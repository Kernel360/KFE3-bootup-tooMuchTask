'use client';

import styled, { css } from 'styled-components';

// 전체 체크박스 영역 wrapper 스타일
const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: 0.1s all ease-in-out;

  &:hover,
  & > *:hover {
    cursor: pointer;
  }

  strong {
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
  }
`;

// 라벨 안에 체크박스와 아이콘 포함
const Label = styled.label`
  display: flex;
  align-items: center;
`;

// 체크 상태 표시 아이콘
const IconWrapper = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background: var(--color-neutral-50);
  border-radius: 4px;
  border: 1px solid var(--color-neutral-300);
  transition: 0.1s all ease-in-out;

  svg {
    opacity: 0;
    transition: 0.1s opacity ease-in-out;
    width: 16px;
    height: 16px;
    fill: #fff;
  }
`;

// 실제 체크박스는 숨기고 focus/checked 상태만 제어
const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:focus + ${IconWrapper} {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }

  &:checked + ${IconWrapper} {
    background: var(--color-teal-500);
    border-color: var(--color-teal-500);

    svg {
      opacity: 1;
    }
  }
`;

export { CheckWrapper, CheckboxInput, Label, IconWrapper };
