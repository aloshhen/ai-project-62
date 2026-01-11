import { motion } from 'framer-motion'
import { cn } from '../utils.js'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-slate-900 mb-6"
          >
            Готовы попробовать?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
          >
            Забронируйте столик или сделайте заказ онлайн. Мы ждем вас каждый день с 9:00 до 22:00.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#reservation"
              className="px-8 py-4 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors transform hover:scale-105"
            >
              Забронировать стол
            </a>
            <a
              href="#menu"
              className="px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors"
            >
              Посмотреть меню
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}