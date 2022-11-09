import Link from 'next/link';
import React, { HTMLAttributeAnchorTarget } from 'react';

export interface IButtonProps {
  variant:
    | 'unstyled'
    | 'filled-gray'
    | 'filled-yellow'
    | 'outline-gray'
    | 'outline-white';
  className?: string;
  href?: string;
  children: React.ReactNode;
  height?: number;
  onClick?: () => void;
  target?: HTMLAttributeAnchorTarget;
}
const Button = ({
  variant,
  href,
  className,
  children,
  height = 55,
  onClick,
  target,
}: IButtonProps) => {
  const getClass = () => {
    switch (variant) {
      case 'unstyled':
        return '';
      case 'filled-yellow':
        return 'px-[40px] bg-primary-yellow text-black font-bold text-[18px] leading-[18px]';
      case 'filled-gray':
        return 'px-[40px] w-full text-white font-bold leading-[16px] bg-primary';
      case 'outline-gray':
        return 'px-[40px] w-full border-2 border-black bg-primary-yellow bg-secondary text-black leading-[16px] font-bold leading-[16px]';
      case 'outline-white':
        return 'px-[40px] w-full border-2 border-white bg-primary text-white font-bold leading-[16px]';
    }
  };

  return (
    <Link href={href || '/'} target={target}>
      <button
        onClick={onClick}
        style={{ height }}
        className={`${className} ${getClass()} `}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
