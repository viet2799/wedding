import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeart, FaGift, FaRing, FaBookOpen, FaTimes } from "react-icons/fa";
import wedding1 from "/wedding1.jpg";
import wedding2 from "/wedding2.jpg";
const Story = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeAlbum, setActiveAlbum] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);

  const pageVariants = {
    enter: (side) => ({
      rotateY: side === "left" ? 8 : -8,
      x: side === "left" ? -24 : 24,
      opacity: 0,
      scale: 0.98,
    }),
    center: (side) => ({
      rotateY: side === "left" ? -4 : 4,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    }),
    exit: (side) => ({
      rotateY: side === "left" ? -18 : 18,
      x: side === "left" ? 24 : -24,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  const timeline = [
    {
      icon: FaHeart,
      title: "Lần Đầu Gặp Gỡ",
      date: "Mùa Xuân 2020",
      description:
        "Chúng tôi gặp nhau trong một buổi chiều nắng đẹp tại quán cà phê yêu thích. Ánh mắt đầu tiên đã khiến trái tim chúng tôi rung động.",
      image: wedding1,
      color: "from-primary-400 to-primary-600",
      album: [
        wedding1,
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1400&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&auto=format&fit=crop&q=85",
      ],
    },
    {
      icon: FaGift,
      title: "Kỷ Niệm Đáng Nhớ",
      date: "Mùa Hè 2021",
      description:
        "Chuyến đi biển đầu tiên cùng nhau, nơi chúng tôi trao nhau lời hứa sẽ luôn bên nhau dù bất cứ điều gì xảy ra.",
      image: wedding2,
      color: "from-gold-400 to-gold-600",
      album: [
        wedding2,
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1400&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1400&auto=format&fit=crop&q=85",
      ],
    },
    {
      icon: FaRing,
      title: "Ngày Cầu Hôn",
      date: "Mùa Đông 2024",
      description:
        'Dưới bầu trời đầy sao, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất. Em đã nói "Có" với đôi mắt đẫm nước mắt hạnh phúc.',
      image:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
      color: "from-primary-400 to-gold-600",
      album: [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1400&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&auto=format&fit=crop&q=85",
      ],
    },
  ];

  const openFlipBook = (item) => {
    const bookPhotos = item.album?.length ? item.album : [item.image];
    setActiveAlbum({ ...item, album: bookPhotos });
    setPageIndex(0);
  };

  const closeFlipBook = () => {
    setActiveAlbum(null);
    setPageIndex(0);
  };

  const goNext = () => {
    if (!activeAlbum) return;
    const maxLeftIndex = Math.max(
      activeAlbum.album.length - 1 - ((activeAlbum.album.length - 1) % 2),
      0
    );
    setPageIndex((prev) => Math.min(prev + 2, maxLeftIndex));
  };

  const goPrev = () => {
    if (!activeAlbum) return;
    setPageIndex((prev) => Math.max(prev - 2, 0));
  };

  const handlePageClick = (direction) => {
    if (!activeAlbum) return;
    if (direction === "next") goNext();
    if (direction === "prev") goPrev();
  };

  useEffect(() => {
    if (!activeAlbum) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        goNext();
      }
      if (e.key === "ArrowLeft") {
        goPrev();
      }
      if (e.key === "Escape") {
        closeFlipBook();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeAlbum]);

  return (
    <section className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Câu Chuyện Tình Yêu
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Mỗi khoảnh khắc bên nhau đều là một trang sách đẹp trong cuốn sách
          tình yêu của chúng tôi
        </p>
      </motion.div>

      <div className="space-y-24">
        {timeline.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                role="button"
                tabIndex={0}
                onClick={() => openFlipBook(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openFlipBook(item);
                  }
                }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-gray-800 px-3 py-2 rounded-xl shadow-lg backdrop-blur">
                      <p className="text-sm font-semibold">Mở album lật trang</p>
                      <p className="text-xs text-gray-600">Click hoặc Enter</p>
                    </div>
                    <div className="bg-primary-500 text-white p-3 rounded-full shadow-lg">
                      <FaBookOpen />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} text-white mb-4 shadow-lg`}
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>

                <p
                  className={`text-lg font-semibold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.date}
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeAlbum && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFlipBook}
          >
            <motion.div
              className="w-full max-w-6xl bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.97, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 px-6 md:px-8 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary-500 font-semibold">
                    Photo Book
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                    {activeAlbum.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Chạm vào trang để lật tiếp · Mũi tên trái/phải để điều hướng · Esc để thoát
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeFlipBook}
                  className="text-gray-500 hover:text-gray-800 p-2 rounded-full bg-white/80 shadow"
                  aria-label="Đóng album"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="mt-5 relative rounded-2xl bg-gradient-to-br from-pink-50 via-white to-amber-50 border border-white/70 shadow-inner p-4 md:p-6">
                  <div className="relative w-full h-[65vh] max-h-[700px] rounded-xl overflow-visible bg-white shadow-2xl [perspective:2000px] flex items-stretch">
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
                          onClick={() => handlePageClick("prev")}
                        >
                          <img
                            src={activeAlbum.album[pageIndex]}
                            alt={`${activeAlbum.title} - trang ${pageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10"></div>
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/15 via-transparent to-transparent"></div>
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
                            activeAlbum.album[pageIndex + 1]
                              ? pageIndex + 1
                              : "placeholder"
                          }
                          custom="right"
                          variants={pageVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl bg-white border border-white/60 cursor-pointer"
                          onClick={() =>
                            activeAlbum.album[pageIndex + 1]
                              ? handlePageClick("next")
                              : null
                          }
                        >
                          {activeAlbum.album[pageIndex + 1] ? (
                            <>
                              <img
                                src={activeAlbum.album[pageIndex + 1]}
                                alt={`${activeAlbum.title} - trang ${pageIndex + 2}`}
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
                    {activeAlbum
                      ? pageIndex + 1 < activeAlbum.album.length
                        ? `Trang ${pageIndex + 1} & ${Math.min(
                            pageIndex + 2,
                            activeAlbum.album.length
                          )} / ${activeAlbum.album.length}`
                        : `Trang ${pageIndex + 1} / ${activeAlbum.album.length}`
                      : ""}
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={pageIndex === (activeAlbum?.album.length ?? 1) - 1}
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

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="text-center mt-20"
      >
        <div className="inline-flex items-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary-400"></div>
          <FaHeart className="text-primary-500 text-4xl animate-pulse" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary-400"></div>
        </div>
        <p className="text-2xl font-script mt-6 text-gray-700">
          Và giờ đây, chúng tôi sẵn sàng bước vào chương mới...
        </p>
      </motion.div>
    </section>
  );
};

export default Story;
