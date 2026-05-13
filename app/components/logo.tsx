import { HeartPulse } from "lucide-react";

interface LogoProps{
  textColor?: string;
  color?: string;
  className?: string;
}

export default function Logo({textColor, color, className}:LogoProps) {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className={`${textColor}`}>
          <HeartPulse size={32} />
        </div>
        <span className={`text-2xl  font-bold tracking-tight ${className}`}>
          Care<span className={`${color}`}>Online</span>
        </span>
      </div>
    </>
  );
}
