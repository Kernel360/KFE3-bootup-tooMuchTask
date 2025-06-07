'use client';

import { InputToggle } from '@/components/Input/InputToggle';

export default function Home() {
  const onChange = () => {
    console.log('toggle 테스트');
  };

  return (
    <div>
      <InputToggle id='test' label='테스트' onChange={onChange} />
    </div>
  );
}
