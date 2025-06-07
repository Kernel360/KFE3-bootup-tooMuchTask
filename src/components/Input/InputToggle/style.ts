'use client';

import styled, { css } from 'styled-components';

// 전체 체크박스 영역 wrapper 스타일
const ToggleWrapper = styled.div`
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

const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  width: 36px;
  height: 20px;
  border-radius: 20px;
  position: relative;
  margin-right: 8px;
  box-sizing: border-box;
  background: var(--color-neutral-300);
  border: 2px solid var(--color-neutral-300);
`;

const ToggleDot = styled.i`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-neutral-600);
  box-sizing: border-box;
  transform: translateX(0%);
  transition: ease-in-out 0.15s transform;
`;

// 실제 체크박스는 숨기고 focus/checked 상태만 제어
const ToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:focus + ${ToggleButton} {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }

  &:checked + ${ToggleButton} {
    border-color: var(--color-teal-500);
    background: var(--color-teal-500);

    i {
      background: #fff;
      transform: translateX(100%);
    }
  }
`;

export { ToggleWrapper, ToggleInput, Label, ToggleDot, ToggleButton };
