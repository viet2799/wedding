import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaCheckCircle } from 'react-icons/fa';

const RSVP = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ở đây bạn có thể thêm logic gửi form đến backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="rsvp" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Xác Nhận Tham Dự
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sự hiện diện của bạn là niềm vui và vinh dự lớn nhất của chúng tôi
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        {submitted ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="card text-center py-12"
          >
            <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Cảm ơn bạn!
            </h3>
            <p className="text-lg text-gray-600">
              Chúng tôi đã nhận được xác nhận của bạn. Rất mong được gặp bạn!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="card">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <FaUser className="mr-2 text-primary-500" />
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <FaEnvelope className="mr-2 text-primary-500" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <FaPhone className="mr-2 text-primary-500" />
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="0123456789"
                />
              </div>

              {/* Number of guests */}
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <FaUsers className="mr-2 text-primary-500" />
                  Số lượng khách *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} người</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  Lời chúc
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Gửi lời chúc đến cặp đôi..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Gửi Xác Nhận
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default RSVP;
