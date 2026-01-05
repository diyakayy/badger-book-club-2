import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-block px-8 py-3 rounded-full font-sans text-sm tracking-wide transition-all shadow-md hover:shadow-lg";
  
  const variantStyles = {
    primary: "bg-burgundy text-cream hover:bg-burgundy/90",
    secondary: "bg-cream border border-charcoal/20 text-charcoal hover:bg-charcoal/5"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
