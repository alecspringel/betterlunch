import { Link } from 'gatsby';
import React from 'react';
import { useScreenSize } from '../contexts/ScreenSize';

const Button = ({
  className, children, style, to, keepWidth,
}) => {
  const screen = useScreenSize();
  return (
    <Link
      to={to}
      className={`btn ${className}`}
      style={screen.smMax
        ? { ...style, width: keepWidth ? '' : '100%' }
        : style}
    >
      {children}
    </Link>
  );
};

export default Button;
