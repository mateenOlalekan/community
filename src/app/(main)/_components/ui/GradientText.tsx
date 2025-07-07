interface GradientTextProps {
  gradient?: string; // optional if not used dynamically
  className?: string;
  children: React.ReactNode;
}

export function GradientText({
  gradient,
  className = "",
  children,
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}