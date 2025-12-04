import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes } from "react-icons/fa";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const pageVariants = {
    enter: (side) => ({
      rotateY: side === "left" ? 10 : -10,
      x: side === "left" ? -24 : 24,
      opacity: 0,
      scale: 0.98,
    }),
    center: (side) => ({
      rotateY: side === "left" ? -5 : 5,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    }),
    exit: (side) => ({
      rotateY: side === "left" ? -18 : 18,
      x: side === "left" ? 24 : -24,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

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

  const openBook = useCallback(
    (index) => {
      const start = index - (index % 2);
      setPageIndex(start);
      setIsOpen(true);
    },
    []
  );

  const closeBook = useCallback(() => {
    setIsOpen(false);
    setPageIndex(0);
  }, []);

  const goNext = useCallback(() => {
    const maxLeft = Math.max(photos.length - 1 - ((photos.length - 1) % 2), 0);
    setPageIndex((prev) => Math.min(prev + 2, maxLeft));
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setPageIndex((prev) => Math.max(prev - 2, 0));
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeBook();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, goNext, goPrev, closeBook]);

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

      {/* Photo Grid / Mobile slider */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl flex-none w-[80vw] sm:w-[65vw] md:w-full md:flex-auto snap-center md:snap-none"
            onClick={() => openBook(index)}
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

      {/* Flipbook Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeBook}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-6xl bg-white/95 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 px-6 md:px-8 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary-500 font-semibold">
                    Photo Book
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                    Bộ Sưu Tập Ảnh
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Lật trang bằng click/Enter trên trang, phím ← → hoặc nút điều hướng
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeBook}
                  className="text-gray-500 hover:text-gray-800 p-2 rounded-full bg-white/80 shadow"
                  aria-label="Đóng album"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="mt-5 relative rounded-2xl bg-gradient-to-br from-pink-50 via-white to-amber-50 border border-white/70 shadow-inner p-4 md:p-6">
                  <div className="relative w-full h-[65vh] max-h-[720px] rounded-xl overflow-visible bg-white shadow-2xl [perspective:2000px] flex items-stretch">
                    <div className="absolute inset-y-6 left-1/2 w-1.5 rounded-full bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-400 shadow-inner pointer-events-none"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
                      <AnimatePresence mode="wait" custom="left">
                        <motion.div
                          key={pageIndex}
                          custom="left"
                          variants={pageVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl bg-white border border-white/60 cursor-pointer"
                          onClick={goPrev}
                        >
                          <img
                            src={photos[pageIndex].url}
                            alt={photos[pageIndex].title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/10"></div>
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/10 via-transparent to-transparent"></div>
                          </div>
                          <span className="absolute bottom-3 left-3 bg-black/50 text-white text-xs md:text-sm px-3 py-1 rounded-full backdrop-blur">
                            Trang {pageIndex + 1}
                          </span>
                          {pageIndex > 0 && (
                            <span className="absolute top-3 left-3 text-[11px] uppercase tracking-[0.2em] bg-white/90 text-gray-700 px-3 py-1 rounded-full shadow">
                              ← Lật về
                            </span>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      <AnimatePresence mode="wait" custom="right">
                        <motion.div
                          key={
                            photos[pageIndex + 1]
                              ? pageIndex + 1
                              : "placeholder"
                          }
                          custom="right"
                          variants={pageVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl bg-white border border-white/60 cursor-pointer"
                          onClick={photos[pageIndex + 1] ? goNext : undefined}
                        >
                          {photos[pageIndex + 1] ? (
                            <>
                              <img
                                src={photos[pageIndex + 1].url}
                                alt={photos[pageIndex + 1].title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-tl from-black/30 via-transparent to-white/10"></div>
                              <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/12 via-transparent to-transparent"></div>
                              </div>
                              <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs md:text-sm px-3 py-1 rounded-full backdrop-blur">
                                Trang {pageIndex + 2}
                              </span>
                              <span className="absolute top-3 right-3 text-[11px] uppercase tracking-[0.2em] bg-white/90 text-gray-700 px-3 py-1 rounded-full shadow">
                                Lật tiếp →
                              </span>
                            </>
                          ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-white via-pink-50 to-amber-50">
                              <p className="text-sm md:text-base font-semibold text-gray-700">
                                Hết album
                              </p>
                              <p className="text-xs text-gray-500">
                                Lật lại để xem trang trước
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6">
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={pageIndex === 0}
                    className="px-4 md:px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Trang trước
                  </button>
                  <div className="px-4 py-2 rounded-full bg-white/90 border border-gray-200 text-sm font-semibold text-gray-800 shadow">
                    {pageIndex + 1 < photos.length
                      ? `Trang ${pageIndex + 1} & ${Math.min(
                          pageIndex + 2,
                          photos.length
                        )} / ${photos.length}`
                      : `Trang ${pageIndex + 1} / ${photos.length}`}
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={pageIndex >= photos.length - 1}
                    className="px-4 md:px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-gold-500 to-gold-600 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Trang sau →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
