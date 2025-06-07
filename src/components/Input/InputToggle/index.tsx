'use client';

/**
 * 체크박스 컴포넌트
 * - 기본 또는 상세 페이지에서 사용
 * - 체크박스 및 텍스트 입력 혹은 링크로 구성
 * - 체크 시 배경 변경 및 텍스트 스타일 변화
 */

import { useEffect, useRef, useState } from 'react';
import { ToggleInput, ToggleWrapper, Label, ToggleDot, ToggleButton } from './style';
import styled from 'styled-components';

// InputCheck 컴포넌트의 props 타입
interface InputToggleProp {
  id: string;
  label: string;
  onChange: () => void;
  hiddenlabel?: boolean;
}

export const InputToggle = ({ id, label, onChange, hiddenlabel }: InputToggleProp) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string | undefined>('');
  const [active, setActive] = useState<boolean>(false);

  // 텍스트 상태를 부모로부터 받은 label로 초기화
  useEffect(() => {
    setText(label);
  }, [label]);

  /**입력 필드의 길이에 따라 width 조절 */
  useEffect(() => {
    if (inputRef.current && text) {
      inputRef.current.style.width = `${Math.max(text.length + 2, 1)}ch`;
    }
  }, [text]);

  return (
    <ToggleWrapper>
      <Label htmlFor={id.toString()}>
        <ToggleInput type='checkbox' id={id.toString()} name={label} onChange={onChange} />
        <ToggleButton aria-hidden='true'>
          <ToggleDot />
        </ToggleButton>
        {!hiddenlabel && <strong>{label}</strong>}
      </Label>
    </ToggleWrapper>
  );
};
