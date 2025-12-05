import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FaHeart, FaChevronDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Generate random hearts data outside component to avoid render issues
const generateHearts = () => 
  [...Array(15)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    size: Math.random() * 20 + 10
  }));

const HEARTS_DATA = generateHearts();

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Ngày cưới - đếm ngược đến 15/12/2025 00:00 (giờ địa phương)
  const weddingDate = useMemo(() => new Date('2025-12-15T00:00:00'), []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      const remaining = Math.max(0, difference);

      setTimeLeft({
        days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((remaining / 1000 / 60) % 60),
        seconds: Math.floor((remaining / 1000) % 60)
      });
    };

    updateCountdown(); // Set initial value immediately
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-pink-50 to-gold-100">
        <div className="absolute inset-0 bg-[url('/B0P_6101.JPG')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HEARTS_DATA.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-primary-300"
            initial={{ 
              y: '100vh',
              opacity: 0 
            }}
            animate={{
              y: -100,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear"
            }}
            style={{ left: `${heart.x}%` }}
          >
            <FaHeart size={heart.size} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p 
            className="text-primary-600 text-lg md:text-xl mb-4 font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Save The Date
          </motion.p>
          
          <motion.h1 
            className="font-script text-6xl md:text-8xl lg:text-9xl gradient-text mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
          >
            Việt &amp; Hương
          </motion.h1>

          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400"></div>
            <FaHeart className="text-primary-500 text-2xl animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-400"></div>
          </motion.div>

          <motion.p 
            className="text-2xl md:text-3xl text-gray-700 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            15 • 12 • 2025
          </motion.p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          {[
            { value: timeLeft.days, label: 'Ngày' },
            { value: timeLeft.hours, label: 'Giờ' },
            { value: timeLeft.minutes, label: 'Phút' },
            { value: timeLeft.seconds, label: 'Giây' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="card text-center bg-white/85 backdrop-blur border border-primary-50"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                {inView ? formatNumber(item.value) : '00'}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaChevronDown className="text-primary-500 text-3xl opacity-70" />
      </motion.div>
    </section>
  );
};

export default Hero;
