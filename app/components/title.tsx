interface TitleProps {
  text?: string;
  textColor?: string;
  color?: string;
  align?: string;
}

export default function Title({
  text,
  textColor,
  color,
  align,
}: TitleProps) {
  return (
    <div>
      {/* SMALL LABEL */}
      {text && (
        <div className={`flex items-center gap-3 mb-6 ${align}`}>
          <div className={`w-8 h-[2px] ${color}`} />
          <span
            className={`uppercase tracking-[3px] text-[12px] font-bold ${textColor}`}
          >
            {text}
          </span>
        </div>
      )}
    </div>
  );
}
