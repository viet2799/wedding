import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
      title: 'Ảnh cưới lãng mạn'
    },
    {
      url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800',
      title: 'Khoảnh khắc hạnh phúc'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      title: 'Ngày trọng đại'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
      title: 'Tình yêu vĩnh cửu'
    },
    {
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
      title: 'Hạnh phúc bên nhau'
    },
    {
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
      title: 'Kỷ niệm đáng nhớ'
    },
    {
      url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800',
      title: 'Cùng nhau'
    },
    {
      url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
      title: 'Chuyến đi đáng nhớ'
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800',
      title: 'Lời cầu hôn'
    }
  ];

  return (
    <section className="section-container bg-gradient-to-br from-pink-50 to-gold-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Bộ Sưu Tập Ảnh
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Những khoảnh khắc đẹp nhất của chúng tôi
        </p>
      </motion.div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl"
            onClick={() => setSelectedImage(photo)}
          >
            <img 
              src={photo.url} 
              alt={photo.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold">
                  {photo.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 text-white text-3xl hover:text-primary-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white text-2xl font-semibold text-center">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
