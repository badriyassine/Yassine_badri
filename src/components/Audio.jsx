import React, { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeDown,
  FaRedo,
  FaChevronLeft,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import myMusic from "../assets/audio/Music.mp3";

const Audio = () => {
  const audioRef = useRef(null);
  const hideTimer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1); // 10%
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(true);

  // set audio element volume on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  // function to reset hide timer
  const resetHideTimer = () => {
    setVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), 3000);
  };

  // add global mouse move listener
  useEffect(() => {
    if (!expanded) return;
    const handleMouseMove = () => resetHideTimer();
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [expanded]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
    resetHideTimer();
  };

  const increaseVolume = () => {
    if (!audioRef.current) return;
    const newVol = Math.min(volume + 0.1, 1);
    audioRef.current.volume = newVol;
    setVolume(newVol);
    resetHideTimer();
  };

  const decreaseVolume = () => {
    if (!audioRef.current) return;
    const newVol = Math.max(volume - 0.1, 0);
    audioRef.current.volume = newVol;
    setVolume(newVol);
    resetHideTimer();
  };

  const resetAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    if (!isPlaying) audioRef.current.play();
    setIsPlaying(true);
    resetHideTimer();
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2">
      <audio ref={audioRef} src={myMusic} loop preload="auto" />

      {/* Toggle arrow when collapsed */}
      {!expanded && (
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
          onClick={() => {
            setExpanded(true);
            resetHideTimer();
          }}
          className="p-2 rounded-full bg-gray-800 text-white shadow-md hover:scale-110 transition-transform"
        >
          <FaChevronLeft size={16} />
        </motion.button>
      )}

      {/* Control panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="audio-controls"
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: visible ? 1 : 0,
              x: visible ? 0 : 80,
              scale: visible ? 1 : 0.95,
            }}
            exit={{ opacity: 0, x: 80, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-lg w-fit"
          >
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-gray-700 hover:scale-110 transition-transform duration-300 text-white"
            >
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>

            <button
              onClick={decreaseVolume}
              className="p-2 rounded-full bg-gray-700 hover:scale-110 transition-transform duration-300 text-white"
            >
              <FaVolumeDown size={16} />
            </button>

            <button
              onClick={increaseVolume}
              className="p-2 rounded-full bg-gray-700 hover:scale-110 transition-transform duration-300 text-white"
            >
              <FaVolumeUp size={16} />
            </button>

            <button
              onClick={resetAudio}
              className="p-2 rounded-full bg-[#050708] hover:scale-110 transition-transform duration-300 text-white"
            >
              <FaRedo size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Audio;



