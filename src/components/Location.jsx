import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaClock, FaCalendar, FaChurch } from "react-icons/fa";

const Location = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      icon: FaChurch,
      title: "Tiệc Cưới - Lễ Thành hôn",
      time: "17:00",
      date: "14/12/2025 - 15/12/2025",
      location: "Nhà Thờ Thượng Thôn",
      address: "Thôn Thượng, Quỳnh Phụ, Thái Bình, Việt Nam",
      mapEmbed:
        "https://www.google.com/maps?q=20.6051073,106.4041973&z=17&output=embed",
      mapLink:
        "https://www.google.com/maps/place/Nh%C3%A0+Th%E1%BB%9D+Th%C6%B0%E1%BB%A3ng+Th%C3%B4n/@20.6051073,106.4016224,1036m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3135f3c86921cc13:0xfba7dbbeab859df3!8m2!3d20.6051073!4d106.4041973!16s%2Fg%2F11cn8ynnkk?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Tiệc Cưới - Lễ Thành hôn",
      time: "10:30",
      date: "14/12/2025 - 15/12/2025",
      location: "Nhà Hàng Bia NaDa 586, Trường Thi, Nam Định, Việt Nam",
      address: "Nhà Hàng Bia NaDa 586, Trường Thi, Nam Định, Việt Nam",
      mapEmbed:
        "https://www.google.com/maps?q=20.4172089,106.1607054&z=17&output=embed",
      mapLink:
        "https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Bia+NaDa+586/@20.4172089,106.1607054,17z",
    },
  ];

  return (
    <section
      className="section-container bg-gradient-to-br from-pink-50 to-gold-50"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Thông Tin Sự Kiện
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Chúng tôi rất mong được đón tiếp bạn tại
        </p>
      </motion.div>

      <div className="space-y-16">
        {events.map((event, index) => {
          const Icon = event.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              {/* Info Card */}
              <div className="card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-gold-500 flex items-center justify-center text-white shadow-lg">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {event.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaClock
                      className="text-primary-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Thời gian</p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCalendar
                      className="text-primary-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Ngày</p>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt
                      className="text-primary-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Địa điểm</p>
                      <p className="text-gray-600">{event.location}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {event.address}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-6 inline-block text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Xem Bản Đồ
                </motion.a>
              </div>

              {/* Map */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl h-96"
              >
                <iframe
                  src={event.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Bản đồ ${event.title}`}
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Location;
