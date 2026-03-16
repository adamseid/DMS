"use client";
import React, { useRef, useState } from "react";

export const VideoWithOverlay = ({
  src = "/videos/homepage_video.mp4",
  thumbnail = "/images/web-design-hero.png",
  overlayImage = "/images/play-button.png",
}: {
  src?: string;
  thumbnail?: string;
  overlayImage?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isStarting, setIsStarting] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      setIsStarting(true);
      await video.play();
    } catch (error) {
      console.error("Video play failed:", error);
      setIsStarting(false);
      setIsPlaying(false);
      setShowThumbnail(true);
    }
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
    setIsStarting(false);
  };

  const handlePlaying = () => {
    setIsStarting(false);
    setIsPlaying(true);
    setShowThumbnail(false);
  };

  const handleLoadedData = () => {
    if (isStarting) {
      setShowThumbnail(false);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    setIsPlaying(false);
    setIsStarting(false);
    setShowThumbnail(true);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        preload="auto"
        playsInline
        className="block w-full h-full object-cover"
        onLoadedData={handleLoadedData}
        onPlaying={handlePlaying}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
      />

      {/* Thumbnail only before first play */}
      {showThumbnail && (
        <div className="absolute inset-0 z-10">
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      )}

      {/* Play overlay when video is not playing */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/40"
          aria-label="Play video"
        >
          <img
            src={overlayImage}
            alt="Play video"
            className="w-20 h-20 md:w-32 md:h-32"
            draggable={false}
          />
        </button>
      )}

      {/* Pause overlay when video is playing */}
      {isPlaying && (
        <button
          type="button"
          onClick={handlePause}
          className="absolute inset-0 z-20"
          aria-label="Pause video"
        />
      )}
    </div>
  );
};