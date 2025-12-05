import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHeart, FaGift, FaStar, FaQrcode } from 'react-icons/fa';

const RSVP = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const qrCodes = [
    {
      title: 'Mã QR Chú Rể',
      subtitle: 'Gửi lời chúc đến Đức Việt',
      note: 'Mở camera hoặc app ngân hàng để quét mã',
      image: '/Screenshot 2025-12-05 at 23.19.33.png',
      accent: 'from-rose-400/40 to-pink-400/40',
      icon: FaHeart
    },
    {
      title: 'Mã QR Cô Dâu',
      subtitle: 'Gửi lời chúc đến Thu Hương',
      note: 'Hỗ trợ hầu hết ứng dụng thanh toán',
      image: '/Screenshot 2025-12-05 at 23.22.41.png',
      accent: 'from-amber-400/40 to-rose-400/40',
      icon: FaGift
    }
  ];

  return (
    <section
      id="rsvp"
      className="section-container relative overflow-hidden bg-gradient-to-b from-white via-rose-50/20 to-white"
      ref={ref}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -left-24 top-10 w-80 h-80 bg-rose-100/30 blur-3xl rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-20 bottom-10 w-96 h-96 bg-amber-50/40 blur-3xl rounded-full"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute left-1/2 top-1/3 w-72 h-72 bg-pink-50/20 blur-3xl rounded-full"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          >
            <FaStar className="text-amber-300/20" size={12} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 mb-5 md:mb-6 px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200/50 shadow-lg shadow-rose-100/50"
        >
          <FaGift className="text-rose-400 text-sm" />
          <span className="text-xs md:text-sm font-medium text-gray-700 tracking-wide">Chung Vui Cùng Chúng Mình</span>
          <FaHeart className="text-amber-400 text-sm" />
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent mb-5 md:mb-6 font-script leading-tight">
          Gửi Lời Chúc Phúc
        </h2>
        
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-5 md:mb-6">
          <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
          <FaQrcode className="text-amber-400 text-xl md:text-2xl" />
          <div className="h-px w-16 md:w-20 bg-gradient-to-l from-transparent via-amber-300 to-amber-300"></div>
        </div>
        
        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light px-4">
          Quét mã QR để gửi lời chúc và chung vui cùng hạnh phúc của chúng mình nhé! 💝
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-4">
        {qrCodes.map((qr, index) => {
          const Icon = qr.icon;
          return (
            <motion.div
              key={qr.title}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl border border-white/90 bg-white/70 backdrop-blur-lg hover:shadow-2xl hover:shadow-rose-100/30 transition-all duration-700 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40, x: index === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ 
                duration: 0.9, 
                delay: 0.2 + index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ y: -8 }}
            >
              {/* Background Gradients */}
              <div className={`absolute ${index === 0 ? '-left-16' : '-right-16'} -top-16 w-56 h-56 bg-gradient-to-br ${qr.accent} blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700`} aria-hidden="true"></div>
              <div className={`absolute ${index === 0 ? '-right-16' : '-left-16'} -bottom-16 w-64 h-64 bg-gradient-to-tl from-rose-50/30 to-amber-50/30 blur-3xl transition-all duration-700`} aria-hidden="true"></div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 via-transparent to-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl md:rounded-3xl"></div>

              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Header Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200/50 shadow-lg mb-4 md:mb-5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-gray-700 tracking-wide">Chung vui</span>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <Icon className="text-rose-400 text-xs md:text-sm" />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent mb-3 md:mb-4 font-script"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  {qr.title}
                </motion.h3>

                {/* Subtitle */}
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 font-light">
                  {qr.subtitle}
                </p>

                {/* QR Code Container */}
                <motion.div 
                  className="relative inline-flex items-center justify-center w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.8 }}
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-6 md:-inset-8 rounded-3xl bg-gradient-to-r from-rose-200/30 via-pink-100/30 to-amber-200/30 blur-2xl" aria-hidden="true"></div>
                  
                  {/* QR Container */}
                  <div className="relative p-5 md:p-6 lg:p-7 bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl border-2 border-rose-100/50 shadow-2xl group-hover:shadow-rose-200/30 transition-all duration-700">
                    {/* Inner Gradient Overlay */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-rose-50/40 to-amber-50/30 opacity-50 pointer-events-none"></div>
                    
                    {/* Corner Glows */}
                    <div className={`absolute -left-4 -top-4 h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-br ${qr.accent} blur-xl opacity-60`} aria-hidden="true"></div>
                    <div className="absolute -right-4 -bottom-4 h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-tl from-amber-200/40 to-rose-100/40 blur-xl" aria-hidden="true"></div>
                    
                    {/* QR Code Image */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-rose-100/20 to-amber-100/20 blur-lg opacity-70" aria-hidden="true"></div>
                      <motion.img
                        src={qr.image}
                        alt={`${qr.title} - mã QR`}
                        className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-xl md:rounded-2xl bg-white shadow-lg border-2 border-rose-50"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Animated Ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-xl md:rounded-2xl ring-2 ring-rose-200/50 pointer-events-none"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Floating Icons on Hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={`qr-heart-${i}`}
                        className="absolute text-rose-300/40"
                        style={{
                          left: `${20 + i * 20}%`,
                          bottom: '10%'
                        }}
                        animate={{
                          y: [0, -60],
                          opacity: [0, 0.8, 0],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.25,
                          ease: "easeOut"
                        }}
                      >
                        <FaHeart size={12} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Note */}
                <motion.p 
                  className="text-xs md:text-sm text-gray-500 italic text-center mt-5 md:mt-6 px-4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.15 }}
                >
                  {qr.note}
                </motion.p>

                {/* Bottom Divider */}
                <div className="flex items-center justify-center gap-2 mt-5 md:mt-6 pt-5 md:pt-6 border-t border-rose-100/50">
                  <motion.span 
                    className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-rose-300/60 to-rose-300/60"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "3rem" } : {}}
                    transition={{ delay: 0.9 + index * 0.15, duration: 0.8 }}
                  />
                  <FaQrcode className="text-amber-400 text-sm" />
                  <motion.span 
                    className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent via-amber-300/60 to-amber-300/60"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "3rem" } : {}}
                    transition={{ delay: 0.9 + index * 0.15, duration: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RSVP;
