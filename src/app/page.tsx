'use client';

import { InputCheckBox } from '@/components/Input/InputCheckBox';

export default function Home() {
  function HandleChangeCheck() {
    console.log('check');
  }
  return (
    <div>
      <InputCheckBox label='테스트' id='123' onChange={HandleChangeCheck} hiddenlabel />
    </div>
  );
}
