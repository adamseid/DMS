type GridOverlayProps = {
  height?: string;   // Tailwind height class, e.g., "h-screen" or "h-[1097px]"
  top?: string;      // Tailwind top class, e.g., "top-0" or "top-[612px]"
  zIndex?: string;   // Tailwind z-index class, e.g., "z-10"
  opacity?: string;  // Tailwind opacity class, e.g., "opacity-50"
};

export function GridOverlay({
  height = "h-screen",
  top = "top-0",
  zIndex = "z-0",
  opacity = "opacity-100",
}: GridOverlayProps) {
  return (
    <div
      className={`absolute left-0 w-full pointer-events-none ${height} ${top} ${zIndex} ${opacity}`}
      style={{
        backgroundImage: "url('/images/grid-background.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    />
  );
}
