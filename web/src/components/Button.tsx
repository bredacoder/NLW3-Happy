import React from 'react';

import '../styles/components/button.css'

interface ButtonProps {
  textButton: string;
  active?: string;
}

export default function({ textButton, active }: ButtonProps) {
  return (
    <button
      className={active}
      type="button"
    >
      {textButton}
    </button>
  );
};