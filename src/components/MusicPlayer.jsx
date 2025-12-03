import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaMusic, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const audioRef = useRef(null);

  // URL nhạc nền - bạn có thể thay thế bằng URL của bạn
  // Có thể upload lên Cloudinary, AWS S3, hoặc host ở đâu đó
  const musicUrl = 'YOUR_MUSIC_URL_HERE.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Volume mặc định 30%
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Autoplay prevented:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
      />

      {/* Floating Music Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button
          onClick={() => setIsMinimized(!isMinimized)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-gold-500 text-white shadow-2xl flex items-center justify-center hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={isPlaying ? { duration: 3, repeat: Infinity, ease: "linear" } : {}}
        >
          <FaMusic size={20} />
        </motion.button>
      </motion.div>

      {/* Expanded Player */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-64">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                  >
                    <FaMusic className="text-primary-500" size={20} />
                  </motion.div>
                  <h3 className="font-semibold text-gray-800">Nhạc Nền</h3>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {/* Song Info */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700">
                  Wedding Song
                </p>
                <p className="text-xs text-gray-500">
                  Background Music
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                {/* Volume Toggle */}
                <motion.button
                  onClick={toggleMute}
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMuted ? (
                    <FaVolumeMute className="text-gray-600" size={20} />
                  ) : (
                    <FaVolumeUp className="text-gray-600" size={20} />
                  )}
                </motion.button>

                {/* Play/Pause Button */}
                <motion.button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-gold-500 text-white flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} className="ml-1" />
                  )}
                </motion.button>

                {/* Spacer for symmetry */}
                <div className="w-11"></div>
              </div>

              {/* Playing Animation */}
              {isPlaying && (
                <motion.div
                  className="flex justify-center gap-1 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-primary-500 to-gold-500 rounded-full"
                      animate={{
                        height: ['10px', '30px', '10px'],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
