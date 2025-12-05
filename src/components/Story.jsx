import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeart, FaGift, FaRing, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const storyAlbums = {
  firstMeeting: [
    "/B0P_5047.JPG",
    "/z7290025715685_36070677006bd847b57ce1122583da13.jpg",
    "/z7290029229710_eb4ef6dc67df1bbb54b59047a717291e.jpg",
    "/z7290031215211_1587089e599cc04056c1cd54eccd3bb8.jpg",
  ],
  summerPromise: [
    "/B0P_5488.JPG",
    "/B0P_5889.JPG",
    "/z7290032392619_250237bbd0ab3bc0bea799b80e017703.jpg",
    "/z7290034205938_2dffcac2bac3b9b423a145c07c7df802.jpg",
  ],
  proposal: [
    "/B0P_6101.JPG",
    "/z7290037033934_9a097e992ad46b0a432295269cf26a63.jpg",
    "/z7290039328564_0b72841344fb574dd490ad650bfb245b.jpg",
    "/z7290040555974_92d1c66f897c0c16e77de1c6e52524cf.jpg",
  ],
};
const Story = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      icon: FaHeart,
      title: "Lần Đầu Gặp Gỡ",
      date: "Mùa Xuân 2020",
      description:
        "Chúng tôi gặp nhau trong một buổi chiều nắng đẹp tại quán cà phê yêu thích. Ánh mắt đầu tiên đã khiến trái tim chúng tôi rung động.",
      image: storyAlbums.firstMeeting[0],
      color: "from-primary-400 to-primary-600",
      album: storyAlbums.firstMeeting,
    },
    {
      icon: FaGift,
      title: "Kỷ Niệm Đáng Nhớ",
      date: "Mùa Hè 2021",
      description:
        "Chuyến đi biển đầu tiên cùng nhau, nơi chúng tôi trao nhau lời hứa sẽ luôn bên nhau dù bất cứ điều gì xảy ra.",
      image: storyAlbums.summerPromise[0],
      color: "from-gold-400 to-gold-600",
      album: storyAlbums.summerPromise,
    },
    {
      icon: FaRing,
      title: "Ngày Cầu Hôn",
      date: "Mùa Đông 2024",
      description:
        'Dưới bầu trời đầy sao, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất. Em đã nói "Có" với đôi mắt đẫm nước mắt hạnh phúc.',
      image: storyAlbums.proposal[0],
      color: "from-primary-400 to-gold-600",
      album: storyAlbums.proposal,
    },
  ];

  const [slideIndexes, setSlideIndexes] = useState(() =>
    timeline.map(() => 0)
  );
  const [slideDirections, setSlideDirections] = useState(() =>
    timeline.map(() => "next")
  );
  const touchStartRef = useRef({});

  const slideVariants = {
    enter: (direction) => ({
      x: direction === "next" ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction === "next" ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  const changeSlide = (storyIndex, direction) => {
    if (!timeline[storyIndex]) return;
    setSlideIndexes((prev) => {
      const total = timeline[storyIndex].album?.length || 1;
      const nextIndex =
        direction === "next"
          ? (prev[storyIndex] + 1) % total
          : (prev[storyIndex] - 1 + total) % total;
      const updated = [...prev];
      updated[storyIndex] = nextIndex;
      return updated;
    });
    setSlideDirections((prev) => {
      const updated = [...prev];
      updated[storyIndex] = direction;
      return updated;
    });
  };

  const goToSlide = (storyIndex, targetIndex) => {
    if (!timeline[storyIndex]) return;
    const total = timeline[storyIndex].album?.length || 1;
    setSlideDirections((prev) => {
      const updated = [...prev];
      updated[storyIndex] =
        targetIndex > slideIndexes[storyIndex] ? "next" : "prev";
      return updated;
    });
    setSlideIndexes((prev) => {
      const updated = [...prev];
      updated[storyIndex] = ((targetIndex % total) + total) % total;
      return updated;
    });
  };

  const handleTouchStart = (storyIndex, clientX) => {
    touchStartRef.current[storyIndex] = clientX;
  };

  const handleTouchEnd = (storyIndex, clientX) => {
    const startX = touchStartRef.current[storyIndex];
    if (startX === undefined) return;
    const deltaX = clientX - startX;
    if (Math.abs(deltaX) > 40) {
      changeSlide(storyIndex, deltaX < 0 ? "next" : "prev");
    }
    touchStartRef.current[storyIndex] = undefined;
  };

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
          const album = item.album?.length ? item.album : [item.image];
          const currentSlide = slideIndexes[index] ?? 0;
          const currentDirection = slideDirections[index] ?? "next";

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
              {/* Image slider */}
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl group bg-white cursor-grab active:cursor-grabbing"
                  onTouchStart={(e) =>
                    handleTouchStart(index, e.touches[0]?.clientX ?? 0)
                  }
                  onTouchEnd={(e) =>
                    handleTouchEnd(index, e.changedTouches[0]?.clientX ?? 0)
                  }
                >
                  <div className="relative aspect-[3/4] md:aspect-[4/5] select-none">
                    <AnimatePresence mode="wait" custom={currentDirection}>
                      <motion.img
                        key={`${index}-${currentSlide}`}
                        src={album[currentSlide]}
                        alt={`${item.title} - ảnh ${currentSlide + 1}`}
                        className="w-full h-full object-cover object-center"
                        variants={slideVariants}
                        custom={currentDirection}
                        initial="enter"
                        animate="center"
                        exit="exit"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 text-gray-800 px-3 py-2 rounded-xl shadow-lg backdrop-blur">
                        <p className="text-sm font-semibold">Vuốt hoặc dùng mũi tên</p>
                        <p className="text-xs text-gray-600">để xem thêm khoảnh khắc</p>
                      </div>
                      <div className="bg-primary-500 text-white p-3 rounded-full shadow-lg">
                        <Icon size={18} />
                      </div>
                    </div>
                    {album.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => changeSlide(index, "prev")}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                          aria-label="Ảnh trước"
                        >
                          <FaChevronLeft />
                        </button>
                        <button
                          type="button"
                          onClick={() => changeSlide(index, "next")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-2 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400"
                          aria-label="Ảnh tiếp theo"
                        >
                          <FaChevronRight />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 px-3 py-2 rounded-full backdrop-blur">
                          {album.map((_, dotIndex) => (
                            <button
                              key={dotIndex}
                              type="button"
                              onClick={() => goToSlide(index, dotIndex)}
                              className={`h-2.5 w-2.5 rounded-full border border-white transition ${dotIndex === currentSlide ? "bg-white" : "bg-white/40"}`}
                              aria-label={`Chuyển tới ảnh ${dotIndex + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
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
