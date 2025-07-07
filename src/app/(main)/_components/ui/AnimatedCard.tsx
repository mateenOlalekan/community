// ✅ AnimatedCard component
interface AnimatedCardProps {
  delay: number;
  direction?: "left" | "right" | "up" | "down";
  children: React.ReactNode;
  className?: string;
}

export const AnimatedCard = ({
  delay,
  direction = "up",
  children,
  className = "",
}: AnimatedCardProps) => {
  return (
    <div
      className={`transform transition-all duration-700 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};