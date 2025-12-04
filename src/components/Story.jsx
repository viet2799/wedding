import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeart, FaGift, FaRing } from "react-icons/fa";
import wedding1 from "/wedding1.jpg";
import wedding2 from "/wedding2.jpg";
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
      image: wedding1,
      color: "from-primary-400 to-primary-600",
    },
    {
      icon: FaGift,
      title: "Kỷ Niệm Đáng Nhớ",
      date: "Mùa Hè 2021",
      description:
        "Chuyến đi biển đầu tiên cùng nhau, nơi chúng tôi trao nhau lời hứa sẽ luôn bên nhau dù bất cứ điều gì xảy ra.",
      image: wedding2,
      color: "from-gold-400 to-gold-600",
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
    },
  ];

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
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className={`absolute inset-0 opacity-30`}></div>
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
