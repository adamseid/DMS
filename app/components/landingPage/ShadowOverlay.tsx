type ShadowOverlayProps = {
  height?: string;
  top?: string;
};

export function ShadowOverlay({
  height = "80%",
  top = "0px",
}: ShadowOverlayProps) {
  return (
    <div
      className="absolute left-0 w-full pointer-events-none z-[2]"
      style={{
        top,
        height,
        background: `
          radial-gradient(
            ellipse at center,
            rgba(16,16,16,1) 0%,
            rgba(16,16,16,1) 50%,
            rgba(16,16,16,0.95) 65%,
            rgba(16,16,16,0.85) 80%,
            rgba(16,16,16,0) 100%
          )
        `,
      }}
    />
  );
}
