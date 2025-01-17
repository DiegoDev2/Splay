interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className }: BadgeProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-[#1f1a2e] bg-[#100a21] px-3 py-1 text-sm font-light">
      <span className={`${className} bg-gradient-to-tl from-white via-violet-500 to-white bg-clip-text text-transparent`}>
        {text}
      </span>
    </div>
  );
}

