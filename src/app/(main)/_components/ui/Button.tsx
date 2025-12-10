'use client'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  fullWidth?: boolean; // ✅ Handle this explicitly
  className?: string;
  children: React.ReactNode;
}

export default function ButtonMain ({
  variant = "primary",
  size = "md",
  fullWidth = false, // ✅ Default to false
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-xl transition-all duration-200 flex items-center justify-center";
  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105",
    outline:
      "border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600",
  };
  const sizes = {
    md: "px-4 py-2 text-base",
    lg: "px-4 py-2 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props} // ✅ safe now — fullWidth not included
    >
      {children}
    </button>
  );
};
