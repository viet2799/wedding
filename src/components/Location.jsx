import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaClock, FaCalendar, FaChurch } from 'react-icons/fa';

const Location = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const events = [
    {
      icon: FaChurch,
      title: 'Lễ Thành Hôn',
      time: '14:00',
      date: '31/12/2025',
      location: 'Nhà Thờ Lớn Hà Nội',
      address: '40 Nhà Chung, Hoàn Kiếm, Hà Nội',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096885266175!2d105.84888731476285!3d21.028770385995747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zTmjDoCBUaOG7nSDEkOG7qWNrIHThu5kgTmjDoCBDaMawbmc!5e0!3m2!1svi!2s!4v1234567890'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Tiệc Cưới',
      time: '18:00',
      date: '31/12/2025',
      location: 'Trung Tâm Tiệc Cưới Paradise',
      address: '123 Đường ABC, Quận XYZ, Hà Nội',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096885266175!2d105.84888731476285!3d21.028770385995747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zTmjDoCBUaOG7nSDEkOG7qWNrIHThu5kgTmjDoCBDaMawbmc!5e0!3m2!1svi!2s!4v1234567890'
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
                    <FaClock className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Thời gian</p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCalendar className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Ngày</p>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Địa điểm</p>
                      <p className="text-gray-600">{event.location}</p>
                      <p className="text-gray-500 text-sm mt-1">{event.address}</p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(event.address)}`}
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
                  src={event.mapUrl}
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
