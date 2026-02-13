"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"], // 50% in view
  });

const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]); // stronger rotation
const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
const translate = useTransform(scrollYProgress, [0, 1], [0, -62.5]); // stronger vertical move



  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center"
      style={{ paddingTop: 62.5, paddingBottom: 0 }}
    >
      <div className="w-full max-w-5xl relative" style={{ perspective: 1000 }}>
        <Card rotate={rotate} scale={scale} translate={translate}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        y: translate,
      }}
      className="
        max-w-5xl mx-auto 
        w-full 
        h-[250px] md:h-[675px]
        p-[0.75px] md:p-[2px] 
        bg-[radial-gradient(98.31%_96.15%_at_99.13%_2.71%,#EEE2FF_0%,#9747FF_9.7%,#322EAE_59.04%,#724EA1_100%)]
        rounded-[46px]
        shadow-2xl
      "
    >
      <div className="h-full w-full overflow-hidden rounded-[44px] bg-[#222222]">
        {children}
      </div>
    </motion.div>
  );
};
