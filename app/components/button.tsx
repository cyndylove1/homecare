import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";


interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
  showIcon?: boolean;
  variant?: "primary" | "outline"; 
}

export default function Button({
  text,
  icon,
  showIcon = true,
  className = "",
  variant = "primary",
  ...props
}: PrimaryButtonProps) {
  const baseButtonClasses = `
    mt-4 md:mt-0 
    px-5 h-[48px]
    font-extrabold text-sm cursor-pointer tracking-widest 
    flex items-center justify-center gap-2.5 rounded-md 
    transition-all duration-300
    active:scale-[0.98] group
  `;

  const primaryClasses = `
    bg-[#048b7d] text-white
    hover:bg-[#048b7d]/70
    
  `;

  const outlineClasses = `
    bg-transparent text-black
    border-2 border-[#048b7d]
    
  `;

  const variantClasses =
    variant === "outline" ? outlineClasses : primaryClasses;

  return (
    <button
      className={`${baseButtonClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span className="font-bold tracking-tight">{text}</span>

      {showIcon && (
        <span>
          {icon || (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          )}
        </span>
      )}
    </button>
  );
}
