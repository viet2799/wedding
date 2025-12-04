import { motion } from 'framer-motion';
import { FaHeart, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-900 to-gold-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-8">
          <motion.h3 
            className="font-script text-5xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Việt & Hương
          </motion.h3>
          
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-16 bg-white/30"></div>
            <FaHeart className="text-2xl animate-pulse" />
            <div className="h-px w-16 bg-white/30"></div>
          </motion.div>

          <motion.p 
            className="text-lg mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Cảm ơn bạn đã chia sẻ niềm vui của chúng tôi
          </motion.p>

          <motion.p 
            className="text-white/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            15 • 12 • 2025
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaFacebook, href: '#', label: 'Facebook' },
            { icon: FaInstagram, href: '#', label: 'Instagram' },
            { icon: FaEnvelope, href: 'mailto:contact@wedding.com', label: 'Email' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div 
          className="text-center text-white/50 text-sm border-t border-white/10 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <p>© 2025 Việt & Hương Wedding. Made with <FaHeart className="inline text-primary-300 animate-pulse" /> by Love</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
