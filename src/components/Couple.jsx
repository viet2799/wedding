import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHeart, FaRing, FaStar } from 'react-icons/fa';

// Floating hearts animation data
const floatingHearts = [...Array(6)].map((_, i) => ({
  id: i,
  delay: i * 0.8,
  duration: 3 + Math.random() * 2,
  x: 10 + i * 15,
  size: 15 + Math.random() * 10
}));

const coupleData = [
  {
    role: 'Chú rể',
    name: 'Đức Việt',
    intro:
      'Ấm áp, vui tính, luôn tạo tiếng cười cho mọi người và mong chờ khoảnh khắc nắm tay Hương đi hết chặng đường.',
    image: '1 (5).jpg',
    accent: 'from-primary-500/70 to-primary-300/60',
    accentColor: 'primary'
  },
  {
    role: 'Cô dâu',
    name: 'Thu Hương',
    intro:
      'Dịu dàng, tinh tế, yêu những điều nhỏ bé và đã sẵn sàng viết tiếp câu chuyện yêu thương cùng Việt.',
    image: '1 (16).jpg',
    accent: 'from-gold-500/80 to-primary-400/60',
    accentColor: 'gold'
  }
];

const Couple = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section-container bg-gradient-to-b from-white via-rose-50/20 to-white relative overflow-hidden" ref={ref}>
      {/* Enhanced Background Elements with Movement - Softer, more elegant */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -left-24 -top-10 w-96 h-96 bg-rose-100/30 blur-3xl rounded-full"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-16 bottom-0 w-96 h-96 bg-amber-50/40 blur-3xl rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute left-1/2 top-1/4 w-64 h-64 bg-pink-50/20 blur-3xl rounded-full"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Hearts Animation - More subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-rose-200/15"
            style={{ left: `${heart.x}%` }}
            animate={{
              y: ['100vh', '-100px'],
              x: [0, Math.sin(heart.id) * 30, 0],
              rotate: [0, 360],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: heart.duration + 2,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear"
            }}
          >
            <FaHeart size={heart.size} />
          </motion.div>
        ))}
      </div>

      {/* Sparkle Effects - More refined */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + (i % 2) * 30}%`
            }}
            animate={{
              scale: [0, 0.8, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <FaStar className="text-amber-300/20" size={10} />
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements with Enhanced Animation - Subtle and elegant */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <motion.div 
          className="absolute top-20 left-10 text-rose-300/60"
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaHeart size={32} />
        </motion.div>
        <motion.div 
          className="absolute top-40 right-16 text-amber-300/60"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        >
          <FaRing size={28} />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-20 text-pink-300/60"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <FaHeart size={24} />
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-rose-300/60"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1.5 }}
        >
          <FaRing size={26} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 mb-6 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-rose-200/50 shadow-lg shadow-rose-100/50"
        >
          <FaHeart className="text-rose-400 text-sm" />
          <span className="text-sm font-medium text-gray-700 tracking-wide">Our Love Story</span>
          <FaHeart className="text-amber-400 text-sm" />
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent mb-6 font-script">
          Cô Dâu &amp; Chú Rể
        </h2>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
          <FaRing className="text-amber-400 text-2xl" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent via-amber-300 to-amber-300"></div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Gặp gỡ hai nhân vật chính của buổi tiệc – câu chuyện nhỏ về chúng mình
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-7xl mx-auto">
        {coupleData.map((person, index) => {
          const alignRight = index % 2 !== 0;

          return (
            <motion.div
              key={person.name}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl border border-white/90 bg-white/60 backdrop-blur-md hover:shadow-2xl hover:shadow-rose-100/30 transition-all duration-700 hover:scale-[1.01]"
              initial={{ opacity: 0, y: 50, x: index === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ 
                duration: 0.9, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ y: -6 }}
            >
              {/* Enhanced Gradient Overlays - More subtle */}
              <div className={`absolute ${alignRight ? '-right-12 md:-right-16' : '-left-12 md:-left-16'} -top-12 md:-top-16 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-rose-200/30 to-pink-100/30 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700`} aria-hidden="true"></div>
              <div className={`absolute ${alignRight ? '-left-12 md:-left-16' : '-right-12 md:-right-16'} -bottom-12 md:-bottom-16 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-tl from-amber-100/30 via-rose-50/20 to-pink-50/30 blur-3xl group-hover:blur-2xl transition-all duration-700`} aria-hidden="true"></div>
              
              {/* Animated Border Gradient - Rose gold theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 via-transparent to-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl md:rounded-2xl"></div>

              <div className="relative">
                {/* Image Container with Enhanced Effects */}
                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl">
                  {/* Gradient Overlays - Softer, more elegant */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/15 pointer-events-none z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15 pointer-events-none z-10"></div>
                  
                  {/* Shimmer Effect on Hover - Rose gold theme */}
                  <motion.div
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Enhanced Border - More subtle */}
                  <div className="absolute inset-0 ring-1 ring-white/80 rounded-xl md:rounded-2xl z-10 group-hover:ring-rose-200/40 transition-all duration-500"></div>
                  
                  {/* Image with Hover Effect */}
                  <motion.img
                    src={person.image}
                    alt={`${person.name} - ${person.role}`}
                    className="w-full h-full object-cover object-center brightness-105 contrast-95 saturate-95"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  
                  {/* Corner Decorations with Animation - More refined */}
                  <motion.div 
                    className={`absolute top-3 md:top-4 ${alignRight ? 'right-3 md:right-4' : 'left-3 md:left-4'} w-8 h-8 md:w-10 md:h-10 border-t border-${person.accentColor === 'primary' ? 'l' : 'r'} border-white/70 rounded-tl-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.6, type: "spring" }}
                  />
                  <motion.div 
                    className={`absolute bottom-3 md:bottom-4 ${alignRight ? 'left-3 md:left-4' : 'right-3 md:right-4'} w-8 h-8 md:w-10 md:h-10 border-b border-${person.accentColor === 'primary' ? 'r' : 'l'} border-white/70 rounded-br-lg`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.2, duration: 0.6, type: "spring" }}
                  />
                  
                  {/* Floating Hearts on Hover - More subtle */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={`hover-heart-${i}`}
                        className="absolute text-white/30"
                        style={{
                          left: `${25 + i * 18}%`,
                          bottom: '15%'
                        }}
                        animate={{
                          y: [0, -80],
                          opacity: [0, 0.8, 0],
                          scale: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut"
                        }}
                      >
                        <FaHeart size={10} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Info Card with Enhanced Styling */}
                <motion.div
                  className={`absolute bottom-4 md:bottom-6 left-4 right-4 md:left-auto md:right-auto ${alignRight ? 'md:right-6 lg:right-8' : 'md:left-6 lg:left-8'} md:max-w-[85%] lg:max-w-[80%]`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <div className="relative rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg border border-rose-100/40 p-4 md:p-5 lg:p-6 group-hover:shadow-xl group-hover:shadow-rose-100/10 transition-all duration-700">
                    {/* Decorative Glows - Rose gold theme - More subtle */}
                    <div className="absolute -top-8 md:-top-12 left-3 md:left-5 h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-rose-200/20 to-amber-100/20 blur-2xl" aria-hidden="true"></div>
                    <div className="absolute -bottom-8 md:-bottom-10 right-5 md:right-7 h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-tl from-pink-200/20 to-white/40 blur-2xl" aria-hidden="true"></div>
                    
                    {/* Role Badge - More elegant */}
                    <motion.div 
                      className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/60 backdrop-blur-sm text-gray-700 font-semibold mb-2 md:mb-3 border border-rose-200/40 shadow-sm text-[10px] md:text-xs"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 8px 20px rgba(244, 63, 94, 0.1)"
                      }}
                    >
                      <span className="relative flex h-1 w-1 md:h-1.5 md:w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1 w-1 md:h-1.5 md:w-1.5 bg-rose-400"></span>
                      </span>
                      <span className="tracking-wide">{person.role}</span>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.15, 1],
                          rotate: [0, 8, -8, 0]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        <FaHeart className="text-rose-400 text-[8px] md:text-[10px]" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Name - Rose gold gradient */}
                    <motion.h3 
                      className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 bg-clip-text text-transparent mb-2 md:mb-3 font-script leading-tight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                      whileHover={{ scale: 1.03, x: 3 }}
                    >
                      {person.name}
                    </motion.h3>
                    
                    {/* Intro Text with Enhanced Styling */}
                    <motion.div 
                      className="relative mb-3 md:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                    >
                      {/* Background Highlight Effect - More subtle */}
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-50/20 via-pink-50/10 to-amber-50/20 rounded-lg z-0"></div>
                      
                      {/* Decorative Quote Mark - Top Left */}
                      <motion.div 
                        className="absolute -left-1.5 md:-left-2 top-0 text-2xl md:text-3xl text-rose-200/30 font-serif leading-none select-none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
                      >
                        "
                      </motion.div>
                      
                      <p className="relative text-gray-600 leading-relaxed text-[11px] md:text-xs lg:text-sm px-3 md:px-4 py-2 md:py-3 italic font-light">
                        {person.intro}
                      </p>
                      
                      {/* Decorative End Quote Mark - Bottom Right */}
                      <motion.div 
                        className="absolute -right-0.5 md:-right-1 bottom-0 text-2xl md:text-3xl text-amber-200/30 font-serif leading-none select-none"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                      >
                        "
                      </motion.div>
                      
                      {/* Decorative Corner Accent - Refined */}
                      <div className="absolute top-1 md:top-1.5 left-1 md:left-1.5 w-1.5 h-1.5 md:w-2 md:h-2 border-t border-l border-rose-200/40 rounded-tl"></div>
                      <div className="absolute bottom-1 md:bottom-1.5 right-1 md:right-1.5 w-1.5 h-1.5 md:w-2 md:h-2 border-b border-r border-amber-200/40 rounded-br"></div>
                    </motion.div>
                    
                    {/* Decorative Divider - Rose gold theme */}
                    <div className="flex items-center gap-1.5 md:gap-2 pt-0.5">
                      <motion.span 
                        className="h-px flex-1 bg-gradient-to-r from-rose-300/60 via-pink-300/60 to-amber-300/60 relative overflow-hidden"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : {}}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                      >
                        {/* Shimmer effect on divider */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </motion.span>
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.15, 1]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        <FaRing className="text-amber-400 text-[10px] md:text-xs" />
                      </motion.div>
                      <motion.span 
                        className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-gray-500 font-medium"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 + index * 0.2 }}
                      >
                        LOVE
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Couple;
