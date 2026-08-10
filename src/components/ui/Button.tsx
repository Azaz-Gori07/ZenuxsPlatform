import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  hasArrow?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  hasArrow = false,
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-mono font-medium rounded transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ember/40 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none gap-2';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-xs sm:text-sm px-4 py-2.5',
    lg: 'text-sm sm:text-base px-6 py-3 font-semibold'
  };

  const variantStyles = {
    primary: 'bg-ember text-white hover:bg-ember-hover shadow-lg shadow-ember/15 border border-ember/30',
    secondary: 'bg-iron text-paper hover:bg-border border border-border/80 hover:text-white',
    ghost: 'bg-transparent text-fog hover:text-white hover:bg-white/5 border border-transparent',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 border border-rose-500'
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        <span>{children}</span>
        {hasArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      <span>{children}</span>
      {hasArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};
