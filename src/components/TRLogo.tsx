export const TRLogo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="trGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>
      
      {/* Circular background */}
      <circle cx="32" cy="32" r="32" fill="url(#trGradient)" />
      
      {/* T - Left side */}
      <path
        d="M 16 16 L 32 16 L 32 44 M 16 16 L 48 16"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* R - Right side */}
      <path
        d="M 36 16 L 48 16 Q 50 16 50 18 L 50 28 Q 50 30 48 30 L 36 30 M 48 30 L 56 44"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Vertical line for R */}
      <line x1="36" y1="16" x2="36" y2="44" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
};
