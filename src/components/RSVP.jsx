import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RSVP = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });

  const qrCodes = [
    {
      title: 'Mã QR Nhà Trai',
      subtitle: 'Scan để chung vui cùng chú rể',
      image: '/qr-chu-re.svg'
    },
    {
      title: 'Mã QR Nhà Gái',
      subtitle: 'Scan để chung vui cùng cô dâu',
      image: '/qr-co-dau.svg'
    }
  ];

  return (
    <section
      id="rsvp"
      className="section-container relative overflow-hidden bg-white rounded-[32px] shadow-2xl border border-primary-50"
      ref={ref}
    >
      <div className="absolute -left-16 top-10 w-64 h-64 bg-primary-200/40 blur-3xl rounded-full" aria-hidden="true"></div>
      <div className="absolute -right-10 bottom-10 w-72 h-72 bg-gold-200/40 blur-3xl rounded-full" aria-hidden="true"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          Chung Vui Với Bọn Tớ
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Quét mã QR của mỗi nhà để gửi lời chúc và chung vui cùng tụi mình nhé!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 max-w-6xl mx-auto items-start"
      >
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {qrCodes.map((qr, index) => (
            <motion.div
              key={qr.title}
              className="card relative overflow-hidden bg-gradient-to-br from-white via-primary-50/40 to-gold-50/60"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className="absolute inset-0 scale-110 blur-2xl opacity-60">
                <img
                  src={qr.image}
                  alt={`${qr.title} - nền mờ`}
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-primary-400/40 to-gold-400/40 rounded-full blur-3xl" aria-hidden="true"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-primary-200/60 to-white/60 rounded-full blur-3xl" aria-hidden="true"></div>

              <div className="relative z-10 text-center space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur shadow border border-primary-100 text-sm font-semibold text-primary-700">
                  <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
                  Cùng chung vui
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{qr.title}</h3>
                <p className="text-gray-600 text-base">{qr.subtitle}</p>
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-r from-primary-300/40 via-white/40 to-gold-300/40 blur-2xl" aria-hidden="true"></div>
                  <div className="relative p-5 bg-white/85 backdrop-blur rounded-[24px] border border-primary-100 shadow-2xl">
                    <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-primary-100/40 to-gold-100/30 opacity-70 pointer-events-none"></div>
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/20 to-gold-400/20 blur-xl opacity-80" aria-hidden="true"></div>
                      <img
                        src={qr.image}
                        alt={`${qr.title} - mã QR`}
                        className="relative w-56 md:w-64 mx-auto drop-shadow-lg"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-2 ring-primary-100 animate-pulse pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RSVP;
