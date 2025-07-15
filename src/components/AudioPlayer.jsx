import { Howl } from "howler";
import { React, useEffect, useRef } from "react";
import { useAppStore } from "../store/useAppStore";

const AudioPlayer = () => {
  const audioUrl = useAppStore((s) => s.audioUrl);
  const isPlaying = useAppStore((s) => s.isPlaying);
  const setIsPlaying = useAppStore((s) => s.setIsPlaying);

  const soundRef = useRef(null);

  useEffect(() => {
    if (audioUrl) {
      soundRef.current = new Howl({
        src: [audioUrl],
        html5: true,
        onend: () => setIsPlaying(false),
      });
    }
  }, [audioUrl]);

  const playAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (soundRef.current) {
      soundRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!audioUrl) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="text-sm mb-2">Now playing: {audioUrl.split("/").pop()}</p>
      <button
        className="px-4 py-2 bg-primary text-white rounded"
        onClick={isPlaying ? pauseAudio : playAudio}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default AudioPlayer;
