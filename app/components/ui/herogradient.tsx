export default function GradientHero() {
  return (
    <>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
                    linear-gradient(#05d079 1px, transparent 1px),
                    linear-gradient(90deg, #048b7d 1px, transparent 1px)
                  `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* GRADIENT GLOW BACKGROUND */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[70%] h-[120%] opacity-20 blur-[120px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, #048b7d 0%, #8fffd2 60%, transparent 100%)`,
        }}
      />
      {/* Subtle Dot Grid Patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 opacity-[0.07] pointer-events-none">
        <div className="grid grid-cols-12 gap-4">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-black" />
          ))}
        </div>
      </div>
    </>
  );
}
