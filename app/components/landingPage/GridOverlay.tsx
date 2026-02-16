type GridOverlayProps = {
  height?: string;
  top?: string;
  zIndex?: string;
  opacity?: string;
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
