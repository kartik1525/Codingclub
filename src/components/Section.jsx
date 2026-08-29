import React from 'react';

/**
 * Section - Global section layout wrapper with alternating background variants
 * 
 * @param {'grid' | 'solid'} variant - 'grid' (checkered grid pattern) | 'solid' (clean normal background)
 * @param {string} as - HTML element tag (default: 'section')
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Inner section content
 */
export default function Section({
  variant = 'solid',
  as: Component = 'section',
  className = '',
  children,
  ...props
}) {
  const variantClass = variant === 'grid' ? 'section-grid' : 'bg-bbs-bg';

  return (
    <Component
      className={`${variantClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
