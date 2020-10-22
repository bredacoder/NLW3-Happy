import React from 'react';

import '../styles/components/button.css'

interface ButtonProps {
  textButton: string;
}

export default function({ textButton }: ButtonProps) {
  return (
    <button
      type="button"
    >
      {textButton}
    </button>
  );
};