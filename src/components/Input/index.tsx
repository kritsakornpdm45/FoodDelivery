import React from 'react';
import { IInputProps } from '@/interfaces/components/Input';

export default function Input(probs:IInputProps) {
  return (
    <input
      type={probs.type}
      placeholder={probs.placeholder}
      className={probs.className}
     
    />
  );
}
