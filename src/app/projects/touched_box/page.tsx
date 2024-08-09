'use client';

// components/TextBox.tsx
import React from 'react';

interface TextBoxProps {
  id: string;
  text: string;
  className: string;
  onClick: (id: string) => void;
  highlight: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({ id, text, className, onClick, highlight }) => {
  return (
    <div
      className={`p-4 border ${className} ${highlight ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
      onClick={() => onClick(id)}
    >
      {text}
    </div>
  );
};

export default TextBox;
